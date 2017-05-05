import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class Nav extends Component {

  render() {
      return (
        <div className="row nav">
          <h1 className="title">LegatUdvekslingSøgning.dk</h1>
          <a href="/">
            <i className="fa fa-home fa-4x home"></i>
          </a>
        </div>
      )
  }
}
