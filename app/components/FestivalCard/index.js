import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class FestivalCard extends Component {
    render() {
        return (

              <div className="festival-card">
                <div class="header-image">
                  Image goes here
                </div>
                <h3>
                  Festival name
                </h3>
                <div className="matched-total">
                  <div class="matched-number">
                    52
                  </div>
                  <p className="lg">
                    Matched arists
                  </p>
                </div>

                <div class="location">
                  <i className="fa fa-map-marker"></i> Location
                </div>

                <div class="date">
                  <i className="fa fa-calendar"></i> 20th - 26th July 2016
                </div>

                <button className="btn btn-block btn-lg">
                  Read more
                </button>

              </div>
        )
    }
}
