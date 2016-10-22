import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
              <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
            </head>
            <body>
                {this.props.children}
            </body>
          </html>
        )
    }
}
