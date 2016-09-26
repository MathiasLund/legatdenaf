import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'
import SpotifyBtn from './components/Button'

var app = express.Router();

app.get('/', function(req, res, next) {

  let component = renderToString(
      <App>
        <SpotifyBtn></SpotifyBtn>
      </App>
  );

  res.send(
    component
  )
});

module.exports = app;
