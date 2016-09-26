import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class SpotifyBtn extends Component {
    render() {
        return (
          <Button href="/spotify/login" bsStyle="success">Login with Spotify</Button>
        )
    }
}
