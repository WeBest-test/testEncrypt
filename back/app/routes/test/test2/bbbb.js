var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/eee', function(req, res, next) {
  res.send(__dirname);
});

module.exports = router;