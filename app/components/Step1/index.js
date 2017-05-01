import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'

export default class Step1 extends Component {
    render() {
        return (
        <div>
          <ProgressBar step={"step1"} />
        </div>
        )
    }
}
