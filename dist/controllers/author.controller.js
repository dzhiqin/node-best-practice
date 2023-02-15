"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRecord = void 0;
var _models = require("../models");
var _result = require("../libs/result");
var createRecord = function createRecord(req, res) {
  var name = req.body.name;
  _models.Author.create({
    name: name
  }).then(function (author) {
    return res.json(_result.Result.success(author));
  })["catch"](function (err) {
    return res.status(500).json(_result.Result.failed(err));
  });
};
exports.createRecord = createRecord;