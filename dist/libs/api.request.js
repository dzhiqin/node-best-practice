"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("./axios"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var baseUrl = process.env.NODE_ENV === 'development' ? _config["default"].baseUrl.dev : _config["default"].baseUrl.prod;
var axios = new _axios["default"](baseUrl);
var _default = axios;
exports["default"] = _default;