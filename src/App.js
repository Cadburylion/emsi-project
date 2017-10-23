import React, { Component } from 'react'
import logo from './logo.svg'

import Fetch from './component/fetch/index.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Soli Deo Gloria</h1>
        </header>
        <Fetch />
      </div>
    )
  }
}

export default App
