import express from 'express'
var app = express.Router();

app.get('/*', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
})

module.exports = app;
