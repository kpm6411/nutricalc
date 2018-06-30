import React, { Component } from 'react'
import { EventEmitter } from 'events'
import Basal from './Basal'
import Daily from './Daily'

class Calculator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sex: "Male",
      weight: 160,
      height: 68,
      age: 25,
      exercise: "little"
    }
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("updateSex", (newSex) => {
      if( newSex === "Male" && this.state.sex === "Female" ) {
        this.setState({ sex: "Male" })
      } else if( newSex === "Female" && this.state.sex === "Male" ) {
        this.setState({ sex: "Female" })
      }
    })

    this.eventEmitter.addListener("updateWgt", (newWgt) => {
      this.setState({ weight: newWgt })
    })

    this.eventEmitter.addListener("updateHgt", (newHgt) => {
      this.setState({ height: newHgt })
    })

    this.eventEmitter.addListener("updateAge", (newAge) => {
      this.setState({ age: newAge })
    })

    this.eventEmitter.addListener("updateExercise", (newEx) => {
      if(newEx !== this.state.exercise) {
        this.setState({ exercise: newEx })
      }
    })
  }

  calcBasal() {
    if(this.state.sex === "Male") {
      return (
        Math.floor(66 + (6.2 * this.state.weight) + (12.7 * this.state.height) - (6.76 * this.state.age))
      )
    } else {
      return (
        Math.floor(655.1 + (4.35 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.age))
      )
    }
  }

  calcDaily() {
    var multiplier = 1.2

    switch(this.state.exercise) {
      case "light":
        multiplier = 1.375
        break
      case "moderate":
        multiplier = 1.55
        break
      case "heavy":
        multiplier = 1.725
        break
      case "extreme":
        multiplier = 1.9
        break
      default:
        multiplier = 1.2
    }

    return (
      Math.floor(this.calcBasal() * multiplier)
    )
  }

  render() {
    return(
      <div>
        <Basal
          eventEmitter={this.eventEmitter}
          sex={this.state.sex}
          weight={this.state.weight}
          height={this.state.height}
          age={this.state.age}
          calcBasal={this.calcBasal()}
        />

        <Daily
          eventEmitter={this.eventEmitter}
          exercise={this.state.exercise}
          calcDaily={this.calcDaily()}
        />
      </div>
    )
  }
}

export default Calculator
