import React, { Component } from 'react'
import styles from './style.scss'

export default class Table extends Component {
    render() {

      const {artists} = this.props;
        return (
          <table className="table">
            <tbody>
              {artists.map(a => {
                return(
                  <tr>
                    <td>{a.name}</td>
                    <td>{a.count}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
    }
}
