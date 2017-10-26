import React, { Component } from 'react'

export default class Daily extends Component {
  
  render() {
    return(
      <div>
        <h2>Daily Caloric Need</h2>
        <p>Daily Caloric Need is calculated according to your activity level. <br/>Light exercise is 1-3 days per week, Moderate is 3-5 days per week. <br/>Heavy is 6-7 days per week. Extreme is twice per day, or extra heavy workouts.</p>

        <div className="row">
          <div 
            className={this.props.exercise == "little" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateExercise", "little") }}
            >Little Exercise</div>
          <div 
            className={this.props.exercise == "light" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateExercise", "light") }}
            >Light Exercise</div>
          <div 
            className={this.props.exercise == "moderate" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateExercise", "moderate") }}
            >Moderate Exercise</div>
          <div 
            className={this.props.exercise == "heavy" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateExercise", "heavy") }}
            >Heavy Exercise</div>
          <div 
            className={this.props.exercise == "extreme" ? "col-md-2 ex-btn active-box" : "col-md-5 ex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateExercise", "extreme") }}
            >Extreme Exercise</div>
        </div>

        <h3>Your Daily Caloric Need is <b>{this.props.calcDaily}</b> kcal per day.</h3>

      </div>
    )
  }
}