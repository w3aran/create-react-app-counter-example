import React, { Component } from "react";

import { CounterView } from "./view";
import {
  incrementCounter,
  decrementCounter,
  counterReducer
} from "../store";

function connectCounterStore(CounterView) {
  class CounterProvider extends Component {
    constructor(props) {
      super(props);
      this.state = counterReducer();
      this.dispatch = this.dispatch.bind(this);
    }
  
    dispatch(action, cb = () => {}) {
      this.setState((prevState, props) => counterReducer(prevState, action), cb);
    }
  
    mapDispatchToProps(dispatch) {
      return {
        onIncrement: () => dispatch(incrementCounter()),
        onDecrement: () => dispatch(decrementCounter())
      };
    }
  
    render() {
      return (
        <CounterView
          {...this.state}
          {...this.props}
          {...this.mapDispatchToProps(this.dispatch)}
        />
      );
    }
  }
  CounterProvider.displayName = `connectCounterStore(${(CounterView.displayName || CounterView.name || "CounterProvider")})`;
  return CounterProvider;
}

const CounterContainer = connectCounterStore(CounterView);

export {
  connectCounterStore,
  CounterContainer
};
