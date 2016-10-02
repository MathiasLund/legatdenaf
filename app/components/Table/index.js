import React, { Component } from 'react'

export default class Table extends Component {
    render() {
      const {artists} = this.props;
      let i = 0;
        return (
          <table className="table">
            <tbody>
            {JSON.stringify(artists)}
              {artists.map(artist => {
                return (
                  artist.map(a => {
                    return (
                      <tr>
                        <td key={a.id}>{a.name}</td>
                      </tr>
                    )
                  })
                )

              })}

            </tbody>
          </table>
        )
    }
}
