import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import createError from 'http-errors'

import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import FileStreamRotator from 'file-stream-rotator/lib/FileStreamRotator'
import bodyParser from 'body-parser'
import indexRouter from './routes/index.route'  
import usersRouter from './routes/users.route'
import bookRouter from './routes/book.route'
import categoryRouter from './routes/category.route'
import authorRouter from './routes/author.route'

// const path = require('path')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

const logDirectory = path.join(__dirname, 'logs')
const rotateLogStream = FileStreamRotator.getStream({
	date_format: 'YYYYMMDD',
	filename: path.join(logDirectory,'access-%DATE%.log'),
	frequency: 'daily',
	verbose: false,
	max_logs: 10
})
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
morgan.token('body',function(req){
	return req.body ? JSON.stringify(req.body) : '-'
})
morgan.format('short', ':remote-addr :remote-user [:date[clf]] :method :body :url HTTP/:http-version :status :res[content-length] - :response-time ms');
app.use(morgan('short',{
	stream: rotateLogStream,
	// skip: function(req,res) { return res.statusCode < 400 }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',bookRouter);
app.use('/categories',categoryRouter)
app.use('/authors',authorRouter)
//跨域问题解决方面
app.use(cors({  
	origin:['http://localhost:8080'],
	methods:['GET','POST'],
}));
//跨域问题解决方面
app.all('*',function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
module.exports = app;
