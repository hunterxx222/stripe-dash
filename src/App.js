import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import _ from 'lodash';
import { TabList, Tab } from './Tabs.js';
import Checkout from './Checkout';

class App extends Component {
  render() {
    return (
      <TabList>
        <Tab name="Checkout">
          <Checkout/>
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
