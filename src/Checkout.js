import React, { Component } from 'react'

export default class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      latestCharge: 'None'
    }
    this.createCharge = this.createCharge.bind(this)
  }

  createCharge(){

  }

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        <button onClick={this.createCharge}>Charge</button>
        <p>Latest charge: {this.state.latestCharge}</p>
      </div>
    );
  }
}
