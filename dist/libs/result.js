"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseResult = /*#__PURE__*/_createClass(function BaseResult(code, msg) {
  _classCallCheck(this, BaseResult);
  this.code = code;
  this.msg = msg;
});
_defineProperty(BaseResult, "SUCCESS", new BaseResult(200, '成功'));
_defineProperty(BaseResult, "FAILED", new BaseResult(500, '失败'));
_defineProperty(BaseResult, "RECORD_NOT_FOUND", new BaseResult(500, '查无对应数据'));
_defineProperty(BaseResult, "VALIDATE_FAILED", new BaseResult(400, '参数校验失败'));
_defineProperty(BaseResult, "API_NOT_FOUND", new BaseResult(404, '接口不存在'));
_defineProperty(BaseResult, "API_BUSY", new BaseResult(700, '操作过于频繁'));
var Result = /*#__PURE__*/function () {
  function Result(code, msg, data) {
    _classCallCheck(this, Result);
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  _createClass(Result, null, [{
    key: "success",
    value: function success(data) {
      return new Result(BaseResult.SUCCESS.code, BaseResult.SUCCESS.msg, data);
    }
  }, {
    key: "failed",
    value: function failed(errData) {
      return new Result(BaseResult.FAILED.code, BaseResult.FAILED.msg, errData);
    }
  }, {
    key: "validateFailed",
    value: function validateFailed(params) {
      return new Result(BaseResult.VALIDATE_FAILED.code, BaseResult.VALIDATE_FAILED.msg, params);
    }
  }, {
    key: "recordNotFound",
    value: function recordNotFound(data) {
      return new Result(BaseResult.RECORD_NOT_FOUND.code, BaseResult.RECORD_NOT_FOUND.msg, data);
    }
  }]);
  return Result;
}();
exports.Result = Result;