"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.getUserInfo = void 0;
var _api = _interopRequireDefault(require("../libs/api.request"));
var _qs = _interopRequireDefault(require("qs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * 登陆
 */
var login = function login(data) {
  return _api["default"].request({
    url: 'hdapi/admin/login',
    method: 'post',
    data: _qs["default"].stringify(data)
  });
};

/**
 * 登陆
 */
exports.login = login;
var getUserInfo = function getUserInfo(query) {
  return _api["default"].request({
    url: 'hdapi/admin/queryUserByToken',
    method: 'get',
    params: query
  });
};
exports.getUserInfo = getUserInfo;