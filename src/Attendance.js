import React, { useState, useReducer } from "react";
import Students from "./Students";
// dispath
// reducer
// action
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    default:
      return;
  }
};

const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: "동찬",
      isHere: false,
    },
  ],
};

const Attendance = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispath] = useReducer(reducer, initialState);

  const onChangeInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input placeholder="이름을 입력" onChange={onChangeInput} value={name} />
      <button
        onClick={dispath({
          type: "add-students",
          payload: { name },
        })}
      >
        추가
      </button>
      {studentsInfo.students.map((students) => {
        return <Students key={students.id} name={students.name} />;
      })}
    </div>
  );
};

export default Attendance;
