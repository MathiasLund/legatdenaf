import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class ProgressBar extends Component {
    render() {

      let step = this.props.step;

        return (
          <div className="progress">
            <div className={`progress-bar progress-bar-success ${step}`} role="progressbar" aria-valuenow="33"
            aria-valuemin="0" aria-valuemax="100">
              33% complete
            </div>
          </div>
        )
    }
}
