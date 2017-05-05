import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class Box extends Component {

  render() {
      return (
        <a href="/step2">
          <div className="col-lg-4 box">
            <img className="logo" src="http://studenterhuset.com/wp-content/uploads/2016/05/KU-LOGO-web-1024x1022.jpg" />
          </div>
        </a>
      )
  }
}
