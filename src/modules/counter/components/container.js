import { CounterView } from "./view";
import {
  incrementCounter,
  decrementCounter,
  counterReducer
} from "../store";

import { connectLocalStore } from "../../connect-local-store";

const mapStateToProps = (state, props) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch, props) => ({
  onIncrement: () => dispatch(incrementCounter()),
  onDecrement: () => dispatch(decrementCounter())
});

const CounterContainer = connectLocalStore(CounterView, {
  reducer: counterReducer,
  mapStateToProps,
  mapDispatchToProps
});

export {
  CounterContainer
};
