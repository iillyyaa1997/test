var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
app.use('/', express.static(__dirname + '/dict'))
var port = process.env.PORT || 80
app.listen(port)
console.log(app)
console.log('server started ' + port)
