import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Editor from '../src/Editor'

class App extends Component {
  render () {
    return (
      <main>
        <h1>react-inline-editor</h1>
        <Editor />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)