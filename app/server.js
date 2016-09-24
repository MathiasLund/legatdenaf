import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

var app = express.Router();

app.get('/', function(req, res, next) {
  res.render('index',{
    title: 'Festivalfinder'
  });
});

module.exports = app;
