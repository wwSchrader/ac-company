var express = require('express');
var router = express.Router();

/* PUT job in database. */
router.put('/', function(req, res, next) {
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
