import React, { Component } from "react";

export default class ChargesHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charges: []
    };
    this.getCharges = this.getCharges.bind(this);
  }

  getCharges() {
    this.props.getCharges("charges", {}).then(charges => {
      this.setState({
        charges: charges.data
      });
    });
  }

  render() {
    let charges = this.state.charges;
    return (
      <div>
        <h2>Charges:</h2>
        <button onClick={this.getCharges}>Previous Charges</button>
        <ul>{charges.map((item, i) => <li key={i}>{item.id}</li>)}</ul>
      </div>
    );
  }
}
