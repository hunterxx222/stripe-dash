import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";
import { TabList, Tab } from "./Tabs.js";
import Checkout from "./Checkout";
import {withStripe} from "./StripeApi";
class App extends Component {
  render() {
    const WrappedCheckout = withStripe(
      Checkout, 
      "sk_test_BQokikJOvBiI2HlWgH4olfQ2",
      "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
    );
    return (

      <TabList>
        <Tab name="Checkout">
          <WrappedCheckout/>
        </Tab>
        <Tab name="b" default>
          <div><h2>Hello B</h2></div>
        </Tab>
        <Tab name="c">
          <div><h2>Hello C</h2></div>
        </Tab>
      </TabList>
    );
  }
}

export default App;
