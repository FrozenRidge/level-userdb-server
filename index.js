#!/usr/bin/env node

var bunyan = require('bunyan');
var data = require('level-userdb')
var domain = require('domain')
var net = require('net')
var multilevel = require('multilevel')
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

var log = bunyan.createLogger({name: "level-userdb-server"});

if (argv.h) {
  ui.showHelp()
  process.exit(1)
}

var d = domain.create()
d.on('error', function(err) {
  log.error(err)
})
d.run(function() {

  var db = data(argv.database)
  // Wrap level-userdb with multilevel server
  net.createServer(function (c) {
    c.pipe(multilevel.server(db)).pipe(c)
  }).listen(argv.port, argv.address)

  log.info("level-userdb-server listening on %s:%s", argv.address, argv.port)
})
