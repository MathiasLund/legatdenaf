import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import List from '../../List'

export default class KULegater extends Component {
  render() {

    if(this.props.region == "oc") {
      return (
        <div>
          <div className="row">
            <List title={"Hotelejer Anders Månsson og Hustru Hanne Månssons Mindelegat"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Finn Junge-Jensen Legatet"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Selskabet for Efterslægten"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Frederik Larsens Fond"} deadline={"24. juni"} />
          </div>
        </div>
      )
    } else if (this.props.region == "na") {
      return (
        <div>
          <div className="row">
            <List title={"Andersen-Isted Fonden"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"C.A. Petersens Fond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Grosserer Knud Ove Vohlert og hustru Hela Vohlers Legatfond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Fabrikant Vilhelm Pedersen og Hustrus Legat"} deadline={"24. juni"} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="row">
            <List title={"1000 $ Fonden"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Vilhelm Christiansens Fond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"C.A. Petersens Fond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Kongens Lyngby Fonden for fælleslegaterne for Handelsforeningen"} deadline={"24. juni"} />
          </div>
        </div>
      )
    }
  }
}
