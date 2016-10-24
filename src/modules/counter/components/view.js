import React from "react";

function CounterView({
  value,
  onIncrement,
  onDecrement
}) {
  return (
    <div className="Counter">
      <div>Value: {value}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export {
  CounterView
};
