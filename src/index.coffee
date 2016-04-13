express = require 'express'
path = require 'path'
app = express()

app.use '/static', express.static path.join __dirname, '../static'

app.get '/', (req, res) ->
  res.sendFile path.join __dirname, '../views/index.html'

port = process.env.PORT or 3000
app.listen port, ->
  console.log 'Example app listening on port 3000!'
