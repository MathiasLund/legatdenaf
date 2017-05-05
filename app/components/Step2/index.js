import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'
import Header from '../Header'
import List from '../List'

export default class Step2 extends Component {
    render() {
        return (
        <div>
          <div className="container">
            <ProgressBar step={"step2"} />
            <Header title={"Hvad studerer du?"} />

            <div className="row">
              <List title={"Økonomi og matematik"} />
            </div>
            <div className="row">
              <List title={"Økonomi og matematik"} />
            </div>
            <div className="row">
              <List title={"Økonomi og matematik"} />
            </div>
            <div className="row">
              <List title={"Økonomi og matematik"} />
            </div>

          </div>
        </div>
        )
    }
}
