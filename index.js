#!/usr/bin/env node

var data = require('level-userdb')
var dnodeServer = require('level-userdb-dnode').server
var fs = require('fs')
var ui = require('optimist')
  .usage('Usage: $0 -d [database] -a [address] -p [port] ')
  .alias('d', 'database')
  .describe('d', 'Path to database location')
  .default('d', './level-userdb.db')
  .alias('a', 'address')
  .default('a', '0.0.0.0')
  .describe('a', 'address to listen on')
  .alias('p', 'port')
  .describe('p', 'port to listen on')
  .default('p', 9998)
  .alias('h', '--help')


var argv = ui.argv

if (argv.h) {
  ui.showHelp()
  process.exit(1)
}

var server = dnodeServer(argv.database)

server.listen(argv.address, argv.port)

console.log("level-userdb-server listening on %s:%s", argv.address, argv.port)
