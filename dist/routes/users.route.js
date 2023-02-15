"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _users = require("../api/users");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/login', function (req, res, next) {
  (0, _users.login)({
    user_name: 'admin',
    user_pwd: '666'
  }).then(function (result) {
    var _result = {
        result: result
      },
      _result$result$data$d = _result.result.data.data,
      user = _result$result$data$d.user,
      token = _result$result$data$d.token;
    console.log('token', token);
    res.send({
      token: token,
      user: user
    });
  });
});
var _default = router;
exports["default"] = _default;