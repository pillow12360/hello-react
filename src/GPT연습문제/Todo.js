/*
여러개의 하위 state를 다루어야 할 때 

reducer 
dispath
action

3가지로 이루어져 있다.

철수가 은행에 요구
은행은 요구에 따라 업데이트

거래내역 : state
은행 : reducer : state를 변경하는 역할
철수 :  -> dispath 
철수의 요구 : aciton

복잡한 로직을 처리하기 쉬워짐

Dispatch(Ation) -> Reducer(State, Action)

*/

import React, { useReducer } from "react";

const reducer = (state, action) => {};

const Todo = () => {
  const [todo, dispatch] = useReducer(reducer, 0);
  return <div></div>;
};

export default Todo;
