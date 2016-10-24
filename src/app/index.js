import React, { Component } from 'react';
import './app.css';

import { Counter } from "../modules/counter/components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Counter App</h2>
        </div>
        <div className="App-content">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
