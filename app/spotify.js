'use strict';

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Table from './components/Table'
import App from './components/App'
import axios from 'axios'
var SpotifyAPI = require('../API/spotify.js');
var querystring = require('querystring');
var request = require('request');
var map = require('async/map');
var Q = require('q');

var app = express.Router();

app.get('/login', function(req, res) {
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: SpotifyAPI.getSpotifyClientId(),
      scope: scope,
      redirect_uri: SpotifyAPI.getSpotifyRedirectURI()
    }));
});

app.get('/callback', function(req, res) {

  var code = req.query.code || null;

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: SpotifyAPI.getSpotifyRedirectURI(),
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(SpotifyAPI.getSpotifyClientId() + ':' + SpotifyAPI.getSpotifyClientSecret()).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          //console.log(body);
        });


        getPlaylists(access_token)
          .then(playlists => Promise.all(playlists.map(playlist =>
            getArtists(playlist, access_token)))
          .then(artists => {

            artists.map(artist => {
              Promise.all(artist.map(a => {return a}))
              .then(result => {
                let component = renderToString(
                    <App>
                        <Table artists={result} />
                    </App>
                );

                res.send(
                  component
                )

              })
            })

          }));

          /*res.send(
            'ju':'123'
          )*/

      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });

});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

function getPlaylists(access_token) {

  var options = {
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: { 'Authorization': 'Bearer ' + access_token },
    json: true
  };

  return new Promise(function(resolve, reject) {

      request.get(options, function(error, response, body) {
          var playlists = body.items;
          var playlistArray = [];
          playlists.forEach(function(playlist) {
            var name = playlist.name;
            var url = playlist.tracks.href;

            playlistArray.push(url);
          });

          if(!error) {
            resolve(playlistArray);
          } else {
            reject(error);
          }

      });

  });
}

function getArtists(url,access_token) {

  var params = {
    url: url,
    headers: { 'Authorization': 'Bearer ' + access_token },
    json: true
  };

  return new Promise(function(resolve, reject) {

    request.get(params, function(error, response, body) {

        var tracks = body.items;
        var artistArray = [];
        tracks.forEach(function(artists) {
          let allArtists = artists.track.artists;
            allArtists.map(items => {
              artistArray.push(items);
            })
        })

        if(!error) {
          resolve(artistArray);
        } else {
          reject(error);
        }

    });

  })

}

function getArtistImages(artistId) {
    var options = {
      url: 'https://api.spotify.com/v1/artists/' + artistId,
      json: true
    };

    return new Promise(function(resolve, reject) {
      request.get(options, function(error, response, body) {
          if(error != null) {
              reject(error);
          } else {
              resolve(body);
          }
      });
    })

}

module.exports = app;
