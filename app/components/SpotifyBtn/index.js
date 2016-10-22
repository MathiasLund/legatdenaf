import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class SpotifyBtn extends Component {
    render() {
        return (
              <Button className="btn btn-lg" href="/spotify/login" bsStyle="success">
                <i className="fa fa-spotify"></i>
                Login with Spotify
              </Button>
        )
    }
}
