import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class SpotifyBtn extends Component {
    render() {
        return (
          <Button href="/spotify/login" bsStyle="success"><i className="fa fa-spotify"></i> Login with Spotify</Button>
        )
    }
}
