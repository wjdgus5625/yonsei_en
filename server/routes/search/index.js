const express = require('express')
const router = express.Router();
const sample = require('../../sample/sample.json')

const esclient = require('../../config/elastic.config');

const queryUtil = require('../../util/query');
const properties = require('../../config/properties')

// router.get('/', (req, res) => {
//     let resp = {}
//     let size = 12

//     if(req.query.size > 12) {
//         size = req.query.size;
//     }

//     if(req.query.cate_cd === "doctor") {
//         resp[req.query.cate_cd] = {
//             totalSize: sample[req.query.cate_cd].totalSize,
//             list:  sample[req.query.cate_cd].list.slice(0, size)
//         }
//     } else if(req.query.cate_cd === "all") {
//         resp = sample;
//     } else if(req.query.cate_cd !== undefined) {
//         resp[req.query.cate_cd] = sample[req.query.cate_cd]
//     }

//     if(req.query.chosung !== undefined && (req.query.cate_cd === "doctor" || req.query.cate_cd === "all")) {
//         req.query.chosung === "ALL" ? resp = {doctor: sample.doctor} : resp = {doctor: sample.chosung}
//     }

//     res.send(resp)
// });

router.get('/', (req, res, next) => {
    const keyword = req.query.keyword;
    const m_site_cd = req.query.m_site_cd;
    const cate_cd = req.query.cate_cd || "all";
    const category3 = req.query.category3;
    let size = req.query.size || 12;
    const department = req.query.department;
    const chosung = req.query.chosung;
    const order = req.query.order;

    let mustKeyword = "";
    let mustNotKeyword = "";
    let shouldKeyword = "";

    const body = [];
    let cate_cdList = [];

    try {
        if (keyword !== undefined && keyword.length > 0) {
            keyword.split(" ").map(data => {
                data.indexOf("+") === 0 ? mustKeyword += " " + data.slice(1) : 
                data.indexOf("-") === 0 ? mustNotKeyword += " " + data.slice(1) :
                data.indexOf("|") === 0 ? shouldKeyword += " " + data.slice(1) : mustKeyword += " " + data
            })
        } else {
            throw new Error('검색어를 입력해주세요!');
        }

        if(m_site_cd === undefined || m_site_cd.length === 0) {
            throw new Error('기관을 선택해주세요!');
        }
    
        if (cate_cd === "all") {
            // cate_cdList = [cate_cd]
            cate_cdList = ["doctor"]
        } else {
            cate_cdList = [cate_cd]
        }

        cate_cdList.map( data => {
            let index = {}

            if(properties.indexName(data).length === 0) {
                return;
            } else {
                index = {
                    index: properties.indexName(data)
                }
            }
            
            let queryBody = {
                size: size,
                query: {
                    bool: {
                        must: [],
                        must_not: [],
                        should: [],
                        filter: []
                    }
                },
                _source: [],
                sort: []
            }
    
            mustKeyword.length > 0 ? queryBody.query.bool.must.push(queryUtil.multi_match(mustKeyword, [], "AND")) : "";
            mustNotKeyword.length > 0 ? queryBody.query.bool.must_not.push(queryUtil.multi_match(mustNotKeyword, [], "OR")) : "";
            shouldKeyword.length > 0 ? queryBody.query.bool.should.push(queryUtil.multi_match(shouldKeyword, [])) : "";

            if (m_site_cd !== undefined && m_site_cd.length > 0) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("m_site_cd", m_site_cd))
            }

            if (department !== undefined && department.length > 0) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("department", department))
            }
    
            if (chosung !== undefined && chosung.length > 0) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("chosung", chosung))
            }
    
            if (category3 !== undefined && category3.length > 0) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("category3", category3))
            }
            if (order !== undefined && order.length > 0 && cate_cd !== "all") {
                queryBody.sort.push({
                    date_field: {
                        order: "desc"
                    }
                })
            }
            body.push(index)
            body.push(queryBody);
        })
        console.log(JSON.stringify(body))
        body.length === 0 ? res.send() : 
        esclient.msearch({body: body})
        .then(resp => {
            return resp.body.responses
        })
        .then(resp => {
            res.send(resultSetting(resp, cate_cdList, keyword))
        })
        .catch(err => {
            next(err)
        })

    } catch (error) {
        next(error)
    }
});

const resultSetting = (resp, cate_cdList, keyword) => {
    let result = {};

    resp.map((data, index) => {
        result[cate_cdList[index]] = {
            totalSize: data.hits.total.value,
            keyword: keyword,
            list: []
        }
        result[cate_cdList[index]].list = data.hits.hits.map(data => {
            return data._source;
        })
    })

    return result;
}

module.exports = router;