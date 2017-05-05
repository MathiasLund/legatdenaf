import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class List extends Component {

  render() {
      return (
        <a href="/step3">
          <div className="list-row">
            <h3>{this.props.title}</h3>
          </div>
        </a>
      )
  }
}
