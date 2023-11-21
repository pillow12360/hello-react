import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
export default function useInputs(initalFrom) {
  const [state, dispatch] = useReducer(reducer, initalFrom);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
