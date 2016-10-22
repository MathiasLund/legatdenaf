var express = require('express')
var app = express()
var routes = require('./app/server');
var spotifyRoutes = require('./app/spotify.js');

app.use(express.static(__dirname + '/public'));

app.use(spotifyRoutes);
app.use(routes);

const PORT = 3000
app.listen(PORT, () => console.log('Listening on', PORT))
