import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'
import Box from '../Box'
import Header from '../Header'

export default class Step1 extends Component {
    render() {
        return (
        <div>
          <div className="container">
            <ProgressBar step={"step1"} />
            <Header title={"Hvor studerer du?"} />

            <div className="row">
              <Box />
              <Box />
              <Box />
            </div>

            <div className="row">
              <Box />
              <Box />
              <Box />
            </div>

          </div>
        </div>
        )
    }
}
