import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import SpotifyBtn from './components/Button'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <SpotifyBtn />
        <Link to="/about">Link</Link>
      </div>
    )
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
</Router>,document.getElementById("app"))
