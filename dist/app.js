"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _httpErrors = _interopRequireDefault(require("http-errors"));
var _cors = _interopRequireDefault(require("cors"));
var _fs = _interopRequireDefault(require("fs"));
var _FileStreamRotator = _interopRequireDefault(require("file-stream-rotator/lib/FileStreamRotator"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _index = _interopRequireDefault(require("./routes/index.route"));
var _users = _interopRequireDefault(require("./routes/users.route"));
var _book = _interopRequireDefault(require("./routes/book.route"));
var _category = _interopRequireDefault(require("./routes/category.route"));
var _author = _interopRequireDefault(require("./routes/author.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const path = require('path')
var app = (0, _express["default"])();

// view engine setup
app.set('views', _path["default"].join(__dirname, '../views'));
app.set('view engine', 'jade');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
var logDirectory = _path["default"].join(__dirname, 'logs');
var rotateLogStream = _FileStreamRotator["default"].getStream({
  date_format: 'YYYYMMDD',
  filename: _path["default"].join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false,
  max_logs: 10
});
_fs["default"].existsSync(logDirectory) || _fs["default"].mkdirSync(logDirectory);
_morgan["default"].token('body', function (req, res) {
  return req.body ? JSON.stringify(req.body) : '-';
});
_morgan["default"].format('short', ':remote-addr :remote-user [:date[clf]] :method :body :url HTTP/:http-version :status :res[content-length] - :response-time ms');
app.use((0, _morgan["default"])('short', {
  stream: rotateLogStream
  // skip: function(req,res) { return res.statusCode < 400 }
}));

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
app.use('/books', _book["default"]);
app.use('/categories', _category["default"]);
app.use('/authors', _author["default"]);
//跨域问题解决方面
app.use((0, _cors["default"])({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'POST']
}));
//跨域问题解决方面
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;