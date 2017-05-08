import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'
import Header from '../Header'
import Map from '../Map'

export default class Step3 extends Component {
    render() {
        return (
        <div>
          <div className="container">
            <ProgressBar step={"step3"} />
            <Header title={"Hvor skal du på udveksling?"} />

            <div className="row map">
              <Map />
            </div>

          </div>
        </div>
        )
    }
}

window.addEventListener('WorldMapClicked', function(e) {
  localStorage.setItem('region', e.detail.clickedState);
  window.setTimeout(function(){
        window.location.href = '/step4';
    }, 500);
});
