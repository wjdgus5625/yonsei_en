const express = require('express')
const router = express.Router();
const sample = require('../../sample/sample.json')

router.get('/', (req, res) => {
    let resp = {}
    let size = 12;
    resp.request = req.query

    console.log(req.query)

    if(req.query.size > 12) {
        size = req.query.size;
    }

    if(req.query.category2 === "doctor") {
        resp[req.query.category2] = {
            totalSize: sample[req.query.category2].totalSize,
            list:  sample[req.query.category2].list.slice(0, size)
        }
    } else if(req.query.category2 === "all") {
        resp = sample;
    } else if(req.query.category2 !== undefined) {
        resp[req.query.category2] = sample[req.query.category2]
    }

    if(req.query.chosung !== undefined && req.query.category2 === "doctor") {
        resp = {doctor: sample.chosung}
    }

    res.send(resp)
});

module.exports = router;