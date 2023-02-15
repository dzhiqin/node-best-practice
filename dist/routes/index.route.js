"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// var express = require('express');

var router = _express["default"].Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/undertake', function (req, res, next) {
  var pageUrl = decodeURI(req.query.pageUrl);
  // const pageUrl = "https://gzslwzxyy.lanwoncloudfilm.com:7280/cloudfilm/html/login.html?openId=oL9bc5TGXtTrYtyYyNvKsDLrM0pY&type=2&reportId="
  res.render('undertake', {
    pageUrl: pageUrl
  });
});
router.get('/hi', function (req, res, next) {
  req.name = 'kim';
  next();
});
router.get('/hi', function (req, res) {
  res.send("hello ".concat(req.name));
});
router.get('/request', function (req, res, next) {
  res.send(req.query);
});
router.post('/postrequest', function (req, res, next) {
  res.send(req.body);
});
router.get('/user', function (req, res, next) {
  res.send({
    name: 'kim',
    address: '广州海珠区'
  });
});
module.exports = router;