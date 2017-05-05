import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import WorldMap from 'react-world-map';

export default class Map extends Component {

  render() {
      return (
        <WorldMap />
      )
  }
}
