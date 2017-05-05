import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class List extends Component {
  render() {

    let deadline;
    let url = '/step3';

    if (this.props.deadline) {
      deadline = <span className="deadline">{this.props.deadline}</span>
      url = 'http://www.legatbogen.dk';
    }

      return (
        <a href={url}>
          <div className="list-row">
            <h3>{this.props.title}</h3>
            {deadline}
          </div>
        </a>
      )
  }
}
