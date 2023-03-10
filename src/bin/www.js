#!/usr/bin/env node

/**
 * Module dependencies.
 */

// var app = require('../app');
// var debug = require('debug')('node-demo:server');
// var http = require('http');

import app from '../app'
import debugLib from 'debug'
import http from 'http'
import https from 'https'
import fs from 'fs'
import path from 'path'
const debug = debugLib('node-api:server')

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Create HTTP server.
 */

let server
if(process.env.NODE_ENV === 'production'){
	const options = {
		key:fs.readFileSync(path.join(__dirname,'../../cert/node.gdbkyz.com.key')),
		cert:fs.readFileSync(path.join(__dirname,'../../cert/node.gdbkyz.com_bundle.crt'))
	}
	server = https.createServer(options,app)
	server.listen(port)
}else{
	server = http.createServer(app)
	server.listen(port)
} 

/**
 * Listen on provided port, on all network interfaces.
 */

// server.listen(options,port);
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10)

	if (isNaN(port)) {
		// named pipe
		return val
	}

	if (port >= 0) {
		// port number
		return port
	}

	return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port

	// handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires elevated privileges')
		process.exit(1)
		// eslint-disable-next-line
    case 'EADDRINUSE':
		console.error(bind + ' is already in use')
		process.exit(1)
		// eslint-disable-next-line
    default:
		throw error
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address()
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port
	debug('Listening on ' + bind)
}
