import React, { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prevState) => (prevState += 1));
        }}
      >
        1증가 해요
      </button>
    </div>
  );
};

export default Counter2;
