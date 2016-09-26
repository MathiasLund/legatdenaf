import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Layout from './components/Layout'
import Header from './components/Header'

var app = express.Router();

app.get('/', function(req, res, next) {

  let component = renderToString(
      <Layout>
          <Header>
          </Header>
      </Layout>
  );

  res.send(
    component
  )
});

module.exports = app;
