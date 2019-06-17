var express = require('express');
var router = express.Router();

var request = require('request');

var mongoose = require('mongoose');
var projetsModel = require('../models/projets');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  request("https://capsule-exams.herokuapp.com/api/capsule/projects", function(error, response, body) {
    body = JSON.parse(body);
    res.json({projets: body.projects});
  });
});

module.exports = router;
