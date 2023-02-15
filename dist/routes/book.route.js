"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _book = require("../controllers/book.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _book.getRecordsByPage);
router.get('/:id', _book.getRecordById);
router.post('/create', _book.createRecord);
router.post('/delete', _book.deleteRecord);
router.post('/update', _book.updateRecord);
var _default = router;
exports["default"] = _default;