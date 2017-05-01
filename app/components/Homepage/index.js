import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class Homepage extends Component {
    render() {
        return (
        <div>
          <div className="wrapper hero">
            <div className="row nav">
              <h1>Legatudvekslingsøgningforstuderendeidanmark.dk</h1>
            </div>
            <div className="row boxes">
              <div className="col-lg-6 info-box">
                <h3>Info</h3>
                <p>
                Banker udveksling på døren, og har du styr på finanserne? Vores overskuelige løsning giver dig et hurtigt og personligt overblik over, hvilke legater DU kan søge.
                Vores løsning har hjulpet tusinder af studerende igennem legatsøgning – og skaffet de studerende over 10 millioner kroner i legater.
                </p>
              </div>
              <div className="col-lg-6 cta">
                <a href="/step1" role="button" className="btn btn-success">Kickstart din legatsøgning</a>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
