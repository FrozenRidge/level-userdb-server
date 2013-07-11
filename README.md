level-userdb-server
===================

Standalone server for [level-userdb](https://github.com/FrozenRidge/level-userdb).

## Installation

`npm install -g level-userdb-server`


## Usage

`level-userdb-server` will start on port 9998 on INADDR_ANY by default.


```
Usage: node ./index.js -d [database] -a [address] -p [port]

Options:
  -d, --database  Path to database location  [default: "./level-userdb.db"]
  -a, --address   address to listen on       [default: "0.0.0.0"]
  -p, --port      port to listen on          [default: 9998]
```
