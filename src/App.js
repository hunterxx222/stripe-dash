import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";
import { TabList, Tab } from "./Tabs.js";
import Checkout from "./Checkout";
import { withStripe } from "./StripeApi";
import ChargesHistory from "./ChargesHistory.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      info: ""
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    alert(this.state.error);
  }

  render() {
    const WrappedCheckout = withStripe(
      Checkout,
      "sk_test_BQokikJOvBiI2HlWgH4olfQ2",
      "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
    );

    const WrappedChargesHistory = withStripe(
      ChargesHistory,
      "sk_test_BQokikJOvBiI2HlWgH4olfQ2",
      "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
    );

    return (
      <TabList>
        <Tab name="Checkout" default>
          <WrappedCheckout />
        </Tab>
        <Tab name="Charges">
          <WrappedChargesHistory />
        </Tab>
      </TabList>
    );
  }
}

export default App;
