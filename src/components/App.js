import React, { Component } from 'react'
import Calculator from './Calculator'
import '../App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1><i><u>NutriCalc: Nutrition Calculator</u></i></h1>
        <Calculator />
      </div>
    )
  }
}

export default App
