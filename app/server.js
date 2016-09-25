import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

var app = express.Router();

app.get('/', function(req, res, next) {

  let element = React.createElement('div', null, 'Hello World!');
  let component = renderToString(element);

  res.render('index', {
    component: component,
    title: 'Festivalfinder'
  });

});

module.exports = app;
