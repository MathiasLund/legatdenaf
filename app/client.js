import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Homepage from './components/Homepage'

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="about" component={About} />
  </Route>
</Router>,document.getElementById("app"))
