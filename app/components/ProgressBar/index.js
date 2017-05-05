import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class ProgressBar extends Component {
    render() {

      let step = this.props.step;
      let val;
      let title;

      switch (step) {
        case "step1":
          val = 33
          title = "1/3: Vælg uddannelsesinstitution"
          break;
        case "step2":
          val = 66
          title = "2/3: Vælg uddannelse"
          break;
        case "step3":
          val = 100
          title = "3/3: Vælg udvekslingsdestination"
        default:

      }

        return (
          <div className="progress">
            <div className={`progress-bar progress-bar-success ${step}`} role="progressbar" aria-valuenow={`${val}`}
            aria-valuemin="0" aria-valuemax="100">
              {title}
            </div>
          </div>
        )
    }
}
