import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import SpotifyBtn from './components/Button'


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
</Router>,document.getElementById("app"))
