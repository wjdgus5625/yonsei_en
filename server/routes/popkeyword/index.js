const express = require('express')
const router = express.Router();

const esclient = require('../../config/elastic.config');
const index = ".openquery-popquery";

router.get('/', (req, res, next) => {
    // const m_site_cd = req.query.m_site_cd;
    const m_site_cd = "yuhs";

    let queryBody = {
        query: {
            match: {
                label: m_site_cd
            }
        }
    }

    try {
        esclient.search({
            index: index,
            body: queryBody
        })
        .then(resp => {
            res.send(resp.body.hits.hits[0]._source.popqueryJSON)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })

    } catch (error) {
        next(error)
    }
});

module.exports = router;