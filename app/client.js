import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import Homepage from './components/Homepage'
import Step1 from './components/Step1'

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="step1" component={Step1} />
  </Route>
</Router>,document.getElementById("app"))
