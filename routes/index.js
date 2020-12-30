var express = require('express');
var router = express.Router();
const url = require('url');
const db = require('../config/dbconfig.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

module.exports = router;
