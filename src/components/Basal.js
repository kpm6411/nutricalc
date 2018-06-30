import React, { Component } from 'react'

export default class Basal extends Component {

  render() {
    return (
      <div>
        <h2>Basal Metabolic Rate</h2>
        <p>This is how many calories your body would burn if you were to sleep all day. <br/>This is determined by several biological factors.</p>
        <div className="row">
          <div
            className={this.props.sex === "Male" ? "col-md-3 sex-btn active-box" : "col-md-3 sex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateSex", "Male") }}
            >Male</div>
          <div
            className={this.props.sex === "Female" ? "col-md-3 sex-btn active-box" : "col-md-3 sex-btn"}
            onClick={() => { this.props.eventEmitter.emit("updateSex", "Female") }}
            >Female</div>
        </div>

        <div className="row">
          <div className="col-md-4 form-group">
            <label>Weight (lbs):</label>
            <input type="number" className="form-control" min="0" max="999"
              defaultValue={this.props.weight} onChange={(e) => { this.props.eventEmitter.emit("updateWgt", e.target.value)}} />
          </div>
          <div className="col-md-4 form-group">
            <label>Height (ins):</label>
            <input type="number" className="form-control" min="0" max="130"
              defaultValue={this.props.height} onChange={(e) => { this.props.eventEmitter.emit("updateHgt", e.target.value)}} />
          </div>
          <div className="col-md-4 form-group">
            <label>Age (yrs):   </label>
            <input type="number" className="form-control" min="0" max="130"
              defaultValue={this.props.age} onChange={(e) => { this.props.eventEmitter.emit("updateAge", e.target.value)}} />
          </div>
        </div>

        <h3>Your Basal Metabolic Rate is <b>{this.props.calcBasal}</b> kcal per day.</h3>
      </div>
    )
  }

}
