import { Counter } from "./actions";

const incrementCounter = () => ({
  type: Counter.INCREMENT
});

const decrementCounter = () => ({
  type: Counter.DECREMENT
});

export {
  incrementCounter,
  decrementCounter
}
