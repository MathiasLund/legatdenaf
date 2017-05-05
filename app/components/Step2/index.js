import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'
import Header from '../Header'

export default class Step2 extends Component {
    render() {
        return (
        <div>
          <div className="container">
            <ProgressBar step={"step2"} />
            <Header title={"Hvad studerer du?"} />
          </div>
        </div>
        )
    }
}
