import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'

var app = express.Router();

app.get('/', function(req, res, next) {

  let content = renderToString(
      <App></App>
  )
  console.log(content);

  res.render('index', {
    title:'Festivalfinder',
    content:content
  })
});

module.exports = app;
