#!/usr/bin/env node

var data = require('level-userdb')
var dnodeServer = require('level-userdb-dnode').server
var fs = require('fs')
var ui = require('optimist')
  .usage('Usage: $0 -d [database] -h [host] -p [port] ')
  .alias('d', 'database')
  .describe('d', 'Path to database location')
  .default('d', './level-userdb.db')
  .alias('h', 'host')
  .default('h', '0.0.0.0')
  .describe('h', 'host to listen on')
  .alias('p', 'port')
  .describe('p', 'port to listen on')
  .default('p', 9998)


var argv = ui.argv

var server = dnodeServer(argv.database)

server.listen(argv.host, argv.port)

console.log("level-userdb-server listening on %s:%s", argv.host, argv.port)
