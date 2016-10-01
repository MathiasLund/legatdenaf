import React, { Component } from 'react'

export default class Table extends Component {
    render() {
      const {artists} = this.props;
      let i = 0;
        return (
          <div>{JSON.stringify(artists)}</div>
        /*  <table className="table">
            <tbody>
              {artists.map(artist => {
                return (
                  <tr>
                    <td key={artist.id}>{artist.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>*/
        )
    }
}
