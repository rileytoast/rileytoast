express = require 'express'
app = express()

app.get '/', (req, res) ->
  res.sendFile 'views/index.html'
