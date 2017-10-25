import React, { Component } from 'react'
import BasalRate from './BasalRate'
import '../App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1><i><u>Kevin's Nutrition Calculator</u></i></h1>
        <BasalRate />
      </div>
    )
  }
}

export default App
