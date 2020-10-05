const express = require('express')
const router = express.Router();

const esclient = require('../../config/elastic.config');

const queryUtil = require('../../util/query');
const properties = require('../../config/properties')

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
            cate_cdList = properties.tabList(m_site_cd)
        } else {
            cate_cdList = [cate_cd]
            cate_cd === "doctor" || cate_cd === "professor" ? cate_cdList.push("chosung") : "";
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

            if(cate_cd === "all"  && ( data === "doctor" || data === "professor" )) {
                size = 4;
            } else if(cate_cd === "all" && data === "department") {
                size = 8;
            } else if(cate_cd === "all"){
                size = 3;
            } else if(cate_cd === "chosung") {
                size = 0;
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

            if( data !== "doctor" && data !== "professor" && data !== "department" ) {
                queryBody.highlight = {
                    number_of_fragments: 3,
                    fragment_size: 150,
                    pre_tags: ["<strong class='text-primary'>"],
                    post_tags: ["</strong>"],
                    fields: {
                        contents: {}
                    }
                }
            }

            if ( data === "chosung" ) {
                queryBody.aggs = {
                    chosung: {
                        terms: {
                            field: "nm_chosung",
                            size: 20,
                            order: {
                                _key: "asc"
                            }
                        }
                    }
                }
            }

            let searchFields = properties.searchFields(data)
    
            if(mustKeyword.length > 0) {
                queryBody.query.bool.must.push(queryUtil.multi_match(mustKeyword, searchFields, "AND"))
            }

            if(mustNotKeyword.length > 0) {
                queryBody.query.bool.must_not.push(queryUtil.multi_match(mustNotKeyword, searchFields, "OR"))
            }

            if(shouldKeyword.length > 0) {
                queryBody.query.bool.should.push(queryUtil.multi_match(shouldKeyword, searchFields))
                queryBody.query.bool.minimum_should_match = 1;
            }

            if (m_site_cd !== undefined && m_site_cd.length > 0) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("m_site_cd", m_site_cd))
            }

            if (department !== undefined && department.length > 0) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("department", properties.stringToCode(department)))
            }
    
            if (chosung !== undefined && chosung.length > 0 && chosung.toUpperCase() !== "ALL" && ( data === "doctor" || data === "professor" )) {
                queryBody.query.bool.filter.push(queryUtil.filter_term("nm_chosung", chosung))
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
            console.log(err)
            next(err)
        })

    } catch (error) {
        next(error)
    }
});

const resultSetting = (resp, cate_cdList, keyword) => {
    let result = {};
    let totalSize = 0;

    result.keyword = keyword

    resp.map((data, index) => {
        totalSize += data.hits.total.value
        result[cate_cdList[index]] = {
            totalSize: data.hits.total.value,
            keyword: keyword,
            list: [],
            chosung: []
        }

        if(cate_cdList[index] === "chosung" ) {
            data.aggregations.chosung.buckets.map(data => {
                result[cate_cdList[index]].chosung.push(data.key)
            })
        }

        result[cate_cdList[index]].list = data.hits.hits.map(data => {
            if(data.highlight !== undefined) {
                data._source.contents = data.highlight.contents[0]
            }
            return data._source;
        })
    })

    result.totalSize = totalSize

    return result;
}

module.exports = router;