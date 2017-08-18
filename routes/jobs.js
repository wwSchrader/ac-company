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

/* GET all jobs*/
router.get('/', function(req, res, next) {
    Job.find(function(err, jobs) {
        if(err) {
            res.josn({'ERROR': err});
        } else {
            res.json(jobs);
        }
    });
});

module.exports = router;
