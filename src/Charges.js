import React from 'react';

export default class Charges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charges: [],
    }
    this.getChargesHistory = this.getChargesHistory.bind(this);
  }

