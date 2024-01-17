import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "DECRMENT":
      return { value: state.value - 1 };
    case "INCREMENT":
      return { value: state.value + 1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>{state.value}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        감소
      </button>
    </div>
  );
};

export default CounterReducer;
