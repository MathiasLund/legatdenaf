import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import SpotifyBtn from '../SpotifyBtn'
import FestivalCard from '../FestivalCard'

export default class Homepage extends Component {
    render() {
        return (
<div>
          <div className="wrapper hero">
            <div className="container">

              <div className="row header">
                <div className="logo pull-left">
                  Logo
                </div>
                <div className="logo pull-right">
                  Browse Login
                </div>
              </div>

              <div className="row main-body">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="text-white text-center">
                    Find the perfect festival.
                    <br/>
                    Scan your music.
                  </h1>
                  <h4 className="text-white text-center">
                    Plug in your music streaming app and we’ll do all the work
                  </h4>
                </div>
              </div>

              <div className="row cta-group">
                <div className="col-sm-3 col-sm-offset-3">
                  <SpotifyBtn />
                </div>
                <div className="col-sm-3">
                  <SpotifyBtn />
                </div>
              </div>

            </div>
          </div>

          <div className="wrapper section-2">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Tailor your festival experience
                  </h2>
                  <p className="xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <button className="btn btn-block btn-dark">Sign up & get started</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-sm-offset-2">
                  <FestivalCard />
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper music-boxes">
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
            <div className="col-sm-3">
              Rock
            </div>
          </div>

          <div className="wrapper browse-header">
            <div className="container">
              <h3>
                Popular festivals
              </h3>
            </div>
          </div>

          <div className="wrapper browse">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <FestivalCard />
                </div>
                <div className="col-sm-4">
                  <FestivalCard />
                </div>
                <div className="col-sm-4">
                  <FestivalCard />
                </div>
              </div>
            </div>
          </div>

</div>
        )
    }
}
