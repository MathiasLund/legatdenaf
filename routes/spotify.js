var express = require('express');
var router = express.Router();
var SpotifyAPI = require('../API/spotify.js');
var querystring = require('querystring');
var request = require('request');
var map = require ('async/map');


router.get('/login', function(req, res) {

  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: SpotifyAPI.getSpotifyClientId(),
      scope: scope,
      redirect_uri: SpotifyAPI.getSpotifyRedirectURI()
    }));

});

router.get('/callback', function(req, res) {

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

        var artists = getArtists(access_token, (error,artists) => {
          res.send(artists);
        });

      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });

});

router.get('/refresh_token', function(req, res) {

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

function getArtists(access_token, callback) {

    var options = {
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: { 'Authorization': 'Bearer ' + access_token },
      json: true
    };

    request.get(options, function(error, response, body) {
        var playlists = body.items;
        map(playlists, function(playlist,callback) {
          var name = playlist.name;
          var url = playlist.tracks.href;

          var params = {
            url: url,
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };

          request.get(params, function(error, response, body) {
              var tracks = body.items;
              var artistarray = tracks.map(function(track) {
                  return track.track.artists;
              });
              callback(null, artistarray);
          });
        }, function(error,artistsArray) {
          console.log("response", artistsArray);
          callback(null, artistsArray);
        });
    });
}

module.exports = router;
