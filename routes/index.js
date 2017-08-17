var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    response: "***Express is Connected!***"
  });
});

module.exports = router;
