const express = require('express')
const router = express.Router();
const sample = require('../sample/sample.json')

router.get('/', (req, res) => {
    console.log(req.query)

    let resp = sample
    resp.request = req.query

    if(req.query.chosung !== undefined) {
        resp = req.query.chosung === 'all' ? sample.doctor : sample.chosung
    }

    res.send(resp)
});

module.exports = router;