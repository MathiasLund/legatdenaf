import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import Nav from '../Nav'
import List from '../List'

export default class Step4 extends Component {
    render() {
        return (
        <div>
          <Nav />
          <div className="container wrapper">
          <div className="titles">
            <h3>Legattitel</h3>
            <h3 className="right">Deadline</h3>
          </div>

            <div className="row">
              <List title={"Andersen-Isted Fonden"} deadline={"24. juni"} />
            </div>
            <div className="row">
              <List title={"Lægeforeningen"} deadline={"24. juni"} />
            </div>
            <div className="row">
              <List title={"Rambøll Legatet"} deadline={"24. juni"} />
            </div>
            <div className="row">
              <List title={"Axel Nielsen Legatet"} deadline={"24. juni"} />
            </div>

          </div>
        </div>
        )
    }
}
