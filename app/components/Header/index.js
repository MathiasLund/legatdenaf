import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class Header extends Component {
    render() {
        return (
          <h1 className="header-title">{this.props.title}</h1>
        )
    }
}
