import React, { Component } from "react";
import "./styles/index.scss";

import List from "./components/list";
import listData from './data'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="ph"></div>
        <List data={listData} />
        <div className="ph"></div>
      </div>
    );
  }
}

export default App;
