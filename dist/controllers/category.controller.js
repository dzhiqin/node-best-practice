"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecords = exports.getCategoryBooks = exports.getCategoryAuthors = exports.deleteRecord = exports.createRecord = void 0;
var _models = require("../models");
var _result = require("../libs/result");
var getRecords = function getRecords(req, res) {
  _models.Category.findAll({
    attributes: ['id', 'name']
  }).then(function (categories) {
    return res.json(_result.Result.success(categories));
  })["catch"](function (err) {
    return res.status(500).json(_result.Result.failed(err));
  });
};
exports.getRecords = getRecords;
var getCategoryBooks = function getCategoryBooks(req, res) {
  var id = req.body.id;
  // Category.findByPk(id).then(async(category) => {
  //   if(category){
  //     const books = await category.getBooks()
  //     console.log('books',books);
  //     return res.json(Result.success(books))
  //   }else{
  //     return res.json(Result.recordNotFound({id}))
  //   }
  // }).catch(err => {
  //   return res.status(400).json(Result.failed(err))
  // })
  _models.Category.findAll({
    attributes: ['id', 'name'],
    where: {
      id: id
    },
    include: {
      model: _models.Book,
      attributes: ['id', 'name']
    }
  }).then(function (books) {
    return res.json(_result.Result.success(books));
  })["catch"](function (err) {
    return res.status(500).json(_result.Result.failed(err));
  });
};
exports.getCategoryBooks = getCategoryBooks;
var getCategoryAuthors = function getCategoryAuthors(req, res) {
  var id = req.body.id;
  _models.Category.findAll({
    where: {
      id: id
    },
    attributes: ['id', 'name'],
    include: {
      model: _models.Author,
      attributes: ['id', 'name']
    }
  }).then(function (authors) {
    return res.json(_result.Result.success(authors));
  })["catch"](function (err) {
    return res.status(500).json(_result.Result.failed(err));
  });
};
exports.getCategoryAuthors = getCategoryAuthors;
var deleteRecord = function deleteRecord(req, res) {
  var id = req.body.id;
  _models.Category.destroy({
    where: {
      id: id
    }
  }).then(function () {
    return res.json(_result.Result.success(null));
  })["catch"](function (err) {
    return res.status(500).json(_result.Result.failed(err));
  });
};
exports.deleteRecord = deleteRecord;
var createRecord = function createRecord(req, res) {
  var name = req.body.name;
  console.log('name=', name);
  _models.Category.create({
    name: name
  }).then(function (category) {
    return res.json(_result.Result.success(category));
  })["catch"](function (err) {
    return res.status(500).json(_result.Result.failed(err));
  });
};
exports.createRecord = createRecord;