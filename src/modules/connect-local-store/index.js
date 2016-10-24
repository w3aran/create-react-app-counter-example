import React, { Component } from "react";

const connectLocalStore = (WrappedComponent, { reducer, mapStateToProps, mapDispatchToProps }) => {
  class LocalStoreProvider extends Component {
    constructor(props) {
      super(props);
      this.state = reducer();
      this.dispatch = this.dispatch.bind(this);
    }
  
    dispatch(action, cb = () => {}) {
      this.setState((prevState, props) => reducer(prevState, action), cb);
    }
  
    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...mapStateToProps(this.state, this.props)}
          {...mapDispatchToProps(this.dispatch, this.props)}
        />
      );
    }
  }
  LocalStoreProvider.displayName = `connectLocalStore(${(WrappedComponent.displayName || WrappedComponent.name || "LocalStoreProvider")})`;
  return LocalStoreProvider;
};

export {
  connectLocalStore
};
