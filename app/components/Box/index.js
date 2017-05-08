import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class Box extends Component {

  click(e) {
    localStorage.setItem('uni', e.target.dataset.title);
    window.location.href = '/step2'
  }

  render() {
      return (
        <div onClick={this.click} className="col-lg-4 box" data-title={this.props.title}>
          <img className="logo" src={this.props.url} data-title={this.props.title} />
        </div>
      )
  }
}
