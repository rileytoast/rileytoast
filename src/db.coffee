path = require 'path'
Promise = require 'bluebird'
fs = Promise.promisifyAll require 'fs'

dbPath = path.join __dirname, '../databases/db.json'

exports.getData = ->
  fs.readFileAsync dbPath, 'utf8'
    .then (data) ->
      JSON.parse data
    .catch (e) ->
      console.log 'Error reading database', e
