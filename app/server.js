import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'

var app = express.Router();

app.get('/', function(req, res, next) {

  let component = renderToString(
      <App></App>
  );

  res.send(
    component
  )
});

module.exports = app;
