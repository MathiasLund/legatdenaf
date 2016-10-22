import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class SpotifyBtn extends Component {
    render() {
        return (
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
                <div className="h1 text-white text-center">
                  Find the perfect festival.
                  <br/>
                  Scan your music.
                </div>
                <div className="p text-white text-center">
                  Plug in your music streaming app and we’ll do all the work
                </div>
              </div>
              <div className="col-md-12">
                <div clasName="row cta-group">
                  <div className="col-sm-3 col-sm-offset-3">
                    <Button className="btn btn-lg" href="/spotify/login" bsStyle="success">
                      <i className="fa fa-spotify"></i>
                      Login with Spotify
                    </Button>
                  </div>
                  <div className="col-sm-3">
                    <Button className="btn btn-lg" href="/spotify/login" bsStyle="success">
                      <i className="fa fa-spotify"></i>
                      Login with Apple Music
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
