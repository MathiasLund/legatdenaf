var express = require('express')
var app = express()
var routes = require('./app/server');

app.use(express.static(__dirname + '/public'));

app.use(routes);

const PORT = 3000
app.listen(PORT, () => console.log('Listening on', PORT))
