import React, { Component } from 'react'

export default class Table extends Component {
    render() {
      const {artists} = this.props;
      let i = 0;
        return (
          <table className="table">
            <tbody>
              {artists.map(artist => {
                if(i == 10) {
                  console.log(artist.name);
                }

                return (
                  <tr>
                    <td key={artist.id}>{artist.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
    }
}
