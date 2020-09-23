const express = require('express')
const router = express.Router();
const sample = require('../../sample/sample.json')

router.get('/', (req, res) => {
    let resp = sample
    resp.request = req.query

    console.log(req.query)

    if(req.query.category2 !== undefined) {
        resp[req.query.category2] = sample[req.query.category2]
    }

    if(req.query.chosung !== undefined && req.query.category2 === "doctor") {
        resp = {doctor: sample.chosung}
    }

    res.send(resp)
});

module.exports = router;