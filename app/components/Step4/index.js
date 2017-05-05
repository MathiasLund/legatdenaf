import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.scss'

export default class Step4 extends Component {
    render() {
        return (
        <div>
          <div className="container wrapper hero">
            <div className="row nav">
              <h1>Legatudvekslingsøgningforstuderendeidanmark.dk</h1>
            </div>
            <div className="last-step">
              <table className="table">
                <th>
                  <td>Titel</td>
                </th>
                <th>
                  <td>Deadline</td>
                </th>
                <tr>
                  <td>Andersen-Isted Fonden</td>
                  <td>22. juni</td>
                </tr>
                <tr>
                  <td>Andersen-Isted Fonden</td>
                  <td>22. juni</td>
                </tr>
                <tr>
                  <td>Andersen-Isted Fonden</td>
                  <td>22. juni</td>
                </tr>
                <tr>
                  <td>Andersen-Isted Fonden</td>
                  <td>22. juni</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        )
    }
}
