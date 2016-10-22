import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'
import Homepage from './components/Homepage'

var app = express.Router();

app.get('/', function(req, res, next) {

  let component = renderToString(
      <App>
        <Homepage></Homepage>
      </App>
  );

  res.send(
    component
  )
});

module.exports = app;
