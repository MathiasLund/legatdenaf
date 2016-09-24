var SPOTIFY_CLIENT_ID = '3cee54a3d4844469abf8faa966ffe9ab';
var SPOTIFY_CLIENT_SECRET = '2065b2b432d24273b23ff8ac08e72056';
var SPOTIFY_REDIRECT_URI = 'http://localhost:3000/spotify/callback';

exports.getSpotifyClientId = function() {
  return SPOTIFY_CLIENT_ID;
}
exports.getSpotifyClientSecret = function() {
  return SPOTIFY_CLIENT_SECRET;
}
exports.getSpotifyRedirectURI = function() {
  return SPOTIFY_REDIRECT_URI;
}
