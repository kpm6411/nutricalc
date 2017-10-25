import React, { Component } from 'react'
import { EventEmitter } from 'events'
import Basal from './Basal'

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
      this.handleSex(newSex)
    })

    this.eventEmitter.addListener("updateWgt", (newWgt) => {
      this.handleWgt(newWgt)
    })

    this.eventEmitter.addListener("updateHgt", (newHgt) => {
      this.handleHgt(newHgt)
    })

    this.eventEmitter.addListener("updateAge", (newAge) => {
      this.handleAge(newAge)
    })
  }

  handleSex(newSex) {
    if( newSex == "Male" && this.state.sex == "Female" ) {
      this.setState({ sex: "Male" })
    } else if( newSex == "Female" && this.state.sex == "Male" ) {
      this.setState({ sex: "Female" })
    }
  }

  handleWgt(e) {
    this.setState({ weight: e })
  }

  handleHgt(e) {
    this.setState({ height: e })
  }

  handleAge(e) {
    this.setState({ age: e })
  }

  handleExer(newEx) {
    if(newEx != this.state.exercise) {
      this.setState({ exercise: newEx })
    }
  }

  calcBasal() {
    if(this.state.sex == "Male") {
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

        <h2>Daily Caloric Need</h2>
        <p>Daily Caloric Need is calculated according to your activity level. <br/>Light exercise is 1-3 days per week, Moderate is 3-5 days per week. <br/>Heavy is 6-7 days per week. Extreme is twice per day, or extra heavy workouts.</p>

        <div className="row">
          <div 
            className={this.state.exercise == "little" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={this.handleExer.bind(this, "little")}
            >Little Exercise</div>
          <div 
            className={this.state.exercise == "light" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={this.handleExer.bind(this, "light")}
            >Light Exercise</div>
          <div 
            className={this.state.exercise == "moderate" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={this.handleExer.bind(this, "moderate")}
            >Moderate Exercise</div>
          <div 
            className={this.state.exercise == "heavy" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={this.handleExer.bind(this, "heavy")}
            >Heavy Exercise</div>
          <div 
            className={this.state.exercise == "extreme" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={this.handleExer.bind(this, "extreme")}
            >Extreme Exercise</div>
        </div>

        <h3>Your Daily Caloric Need is <b>{this.calcDaily()}</b> kcal per day.</h3>
      </div>      
    )
  }
}

export default Calculator