import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import layout from '../views/layout.jade'

var app = express.Router();

app.get('/', function(req, res, next) {

  let element = React.createElement('div', null, 'Hello World!');
  let content = renderToString(element);

  res.send(layout({
    content: content,
    title: 'Festivalfinder'
  }));

});

module.exports = app;
