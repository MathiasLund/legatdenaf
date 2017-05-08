import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'
import ProgressBar from '../ProgressBar'
import Box from '../Box'
import Header from '../Header'

export default class Step1 extends Component {
    render() {
        return (
        <div>
          <div className="container">
            <ProgressBar step={"step1"} />
            <Header title={"Hvor studerer du?"} />

            <div className="row">
              <Box title="KU" url="http://studenterhuset.com/wp-content/uploads/2016/05/KU-LOGO-web-1024x1022.jpg" />
              <Box title="CBS" url="http://rogfritkbh.kk.dk/sites/rogfritkbh.kk.dk/files/styles/flexslider_full/public/uploaded-images/cbs_logo.jpg?itok=2l7-M44l" />
              <Box title="SDU" url="http://denstoredanske.dk/@api/deki/files/27564/=25763281.601.png" />
            </div>

            <div className="row">
              <Box title="DTU" url="http://www.genomedenmark.dk/images/logoer/dtu.png" />
              <Box title="AU" url="http://mbg.au.dk/fileadmin/site_files/mb/Logoer/au/aulogo.jpg" />
              <Box title="AAU" url="http://demonstrationsskoleprojekt.aau-uc.dk/images/partnerlogoer/aau-logo.png"/>
            </div>

          </div>
        </div>
        )
    }
}
