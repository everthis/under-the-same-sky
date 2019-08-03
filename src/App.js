import React, { Component } from "react";
import "./styles/index.scss";

import List from "./components/list";

class App extends Component {
  render() {
    const arr = new Array(3).fill(0);
    return (
      <div className="app">
        <List data={arr} />
      </div>
    );
  }
}

export default App;
