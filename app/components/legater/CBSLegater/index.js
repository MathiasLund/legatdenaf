import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import List from '../../List'

export default class CBSLegater extends Component {
  render() {

    if(this.props.region == "oc") {
      return (
        <div>
          <div className="row">
            <List title={"Andersen-Isted Fonden"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Tranes Fond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Djøf Legatet"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Axel Nielsen Legatet"} deadline={"24. juni"} />
          </div>
        </div>
      )
    } else if (this.props.region == "na") {
      return (
        <div>
          <div className="row">
            <List title={"Fabrikant Adolph Møller og Hustru Antoinette Møllers fond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Lægeforeningen"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Rambøll Legatet"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Handelskammerets Uddannelsesfond"} deadline={"24. juni"} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="row">
            <List title={"Enkelensgrevinde Ingeborg M. Rantzaus Familiefond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Signe og Arne Højvigs Fond"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"De tre søskende Georg, Henrik og Cecilie Cappelens Legat"} deadline={"24. juni"} />
          </div>
          <div className="row">
            <List title={"Kongens Lyngby Fonden for fælleslegaterne for Handelsforeningen"} deadline={"24. juni"} />
          </div>
        </div>
      )
    }
  }
}
