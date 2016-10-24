import { Counter } from "./actions";

const defaultState = { value: 0 };

const counterReducer = (state = defaultState, action = {}) => {
  const strategy = {
    [Counter.INCREMENT]: (state, action) => ({ ...state, value: state.value + 1 }),
    [Counter.DECREMENT]: (state, action) => ({ ...state, value: state.value - 1 }),
    default: (state, action) => state
  };
  
  return (strategy[action.type] || strategy.default)(state, action);
};

export {
  counterReducer
};
