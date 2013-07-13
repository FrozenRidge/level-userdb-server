level-userdb-server
===================

Standalone server for [level-userdb](https://github.com/FrozenRidge/level-userdb).

You can use [multilevel](https://github.com/juliangruber/multilevel) as as client library or the CLI tool [level-userdb-cli](https://github.com/FrozenRidge/level-userdb-cli) to connect to it.

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

## Todo

Error handling & logging (domains?)
