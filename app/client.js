import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import Homepage from './components/Homepage'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="step1" component={Step1} />
    <Route path="step2" component={Step2} />
    <Route path="step3" component={Step3} />
  </Route>
</Router>,document.getElementById("app"))
