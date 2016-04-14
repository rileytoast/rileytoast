express = require 'express'
path = require 'path'
db = require './db'

app = express()

app.use '/static', express.static path.join __dirname, '../static'
app.use '/lib', express.static path.join __dirname, '../lib'
app.use '/databases', express.static path.join __dirname, '../databases'
app.use '/bower_components', express.static path.join __dirname, '../bower_components'

app.get '/', (req, res) ->
  res.sendFile path.join __dirname, '../views/index.html'

app.get '/shows', (req, res) ->
  db.getData()
    .then (data) ->
      res.send data

port = process.env.PORT or 3000
app.listen port, ->
  console.log "App listening on port #{port}!"
