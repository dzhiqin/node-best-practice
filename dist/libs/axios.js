"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HttpRequest = /*#__PURE__*/function () {
  function HttpRequest() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseURL;
    _classCallCheck(this, HttpRequest);
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  _createClass(HttpRequest, [{
    key: "getInsideConfig",
    value: function getInsideConfig() {
      var config = {
        baseURL: this.baseUrl,
        headers: {
          //
        }
      };
      return config;
    }
  }, {
    key: "destroy",
    value: function destroy(url) {
      delete this.queue[url];
      if (!Object.keys(this.queue).length) {
        // Spin.hide()
      }
    }
  }, {
    key: "interceptors",
    value: function interceptors(instance, url) {
      var _this = this;
      // 请求拦截
      instance.interceptors.request.use(function (config) {
        // 添加全局的loading...
        if (!Object.keys(_this.queue).length) {
          // Spin.show() // 不建议开启，因为界面不友好
        }
        _this.queue[url] = true;
        return config;
      }, function (error) {
        return Promise.reject(error);
      });
      // 响应拦截
      instance.interceptors.response.use(function (res) {
        _this.destroy(url);
        if (res.status === 200) {
          var data = res.data,
            status = res.status;
          return {
            data: data,
            status: status
          };
        }
      }, function (error) {
        _this.destroy(url);
        var errorInfo = error.response;
        if (!errorInfo) {
          var _JSON$parse = JSON.parse(JSON.stringify(error)),
            _JSON$parse$request = _JSON$parse.request,
            statusText = _JSON$parse$request.statusText,
            status = _JSON$parse$request.status,
            config = _JSON$parse.config;
          errorInfo = {
            statusText: statusText,
            status: status,
            request: {
              responseURL: config.url
            }
          };
        }
        return Promise.reject(error);
      });
    }
  }, {
    key: "request",
    value: function request(options) {
      var instance = _axios["default"].create();
      options = Object.assign(this.getInsideConfig(), options);
      this.interceptors(instance, options.url);
      return instance(options);
    }
  }]);
  return HttpRequest;
}();
var _default = HttpRequest;
exports["default"] = _default;