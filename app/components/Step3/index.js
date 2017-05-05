import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'
import Header from '../Header'

export default class Step3 extends Component {
    render() {
        return (
        <div>
          <div className="container">
            <ProgressBar step={"step3"} />
            <Header title={"Hvor skal du på udveksling?"} />
          </div>
        </div>
        )
    }
}
