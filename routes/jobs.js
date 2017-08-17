var express = require('express');
var router = express.Router();
var Job = require('../models/job');

/* PUT job in database. */
router.put('/', function(req, res, next) {
    var newJob = new Job(req.body);
    newJob.save(function(err) {
        if (err) {
            res.json({'ERROR': err});
        } else {
            res.json({'SUCCESS': newJob});
        }
    });
});

module.exports = router;
