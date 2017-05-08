import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import Nav from '../Nav'
import List from '../List'
import KULegater from '../legater/KULegater'
import CBSLegater from '../legater/CBSLegater'

export default class Step4 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        uni: localStorage.uni,
        region: localStorage.region
      }
    }

    render() {

      let legater;
      if(this.state.uni == "KU") {
        legater = <KULegater region={this.state.region} />
      } else {
        legater = <CBSLegater region={this.state.region} />
      }

        return (
        <div>
          <Nav />
          <div className="container wrapper">
          <div className="titles">
            <h3>Legattitel</h3>
            <h3 className="right">Deadline</h3>
          </div>

            {legater}

          </div>
        </div>
        )
    }
}
