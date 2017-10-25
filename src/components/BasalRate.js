import React, { Component } from 'react'

class BasalRate extends Component {

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

  handleSex(newSex) {
    if( newSex == "Male" && this.state.sex == "Female" ) {
      this.setState({ sex: "Male" })
    } else if( newSex == "Female" && this.state.sex == "Male" ) {
      this.setState({ sex: "Female" })
    }
  }

  handleWgt(e) {
    this.setState({ weight: e.target.value })
  }

  handleHgt(e) {
    this.setState({ height: e.target.value })
  }

  handleAge(e) {
    this.setState({ age: e.target.value })
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
        <h2>Basal Metabolic Rate</h2>
        <p>This is how many calories your body would burn if you were to sleep all day. <br/>This is determined by several biological factors.</p>
        <div className="row">
          <div 
            className={this.state.sex == "Male" ? "col-md-5 sex-btn active-box" : "col-md-5 sex-btn"}
            onClick={this.handleSex.bind(this, "Male")}
            >Male</div>
          <div 
            className={this.state.sex == "Female" ? "col-md-5 sex-btn active-box" : "col-md-5 sex-btn"}
            onClick={this.handleSex.bind(this, "Female")}
            >Female</div>
        </div>

        <div className="row">
          <div className="col-md-4 form-group">
            <label>Weight (lbs):</label>
            <input type="number" className="form-control" min="0" max="130" 
              defaultValue={this.state.weight} onChange={this.handleWgt.bind(this)} />
          </div>
          <div className="col-md-4 form-group">
            <label>Height (ins):</label>
            <input type="number" className="form-control" min="0" max="130" 
              defaultValue={this.state.height} onChange={this.handleHgt.bind(this)} />
          </div>
          <div className="col-md-4 form-group">
            <label>Age (yrs):</label>
            <input type="number" className="form-control" min="0" max="130" 
              defaultValue={this.state.age} onChange={this.handleAge.bind(this)} />
          </div>
        </div>

        <h3>Your Basal Metabolic Rate is <b>{this.calcBasal()}</b> kcal per day.</h3>

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

export default BasalRate