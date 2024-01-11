import React, { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    setDisplayValue(inputValue); // 버튼 클릭 시 displayValue 상태 업데이트
  }

  return (
    <div>
      <h1>입력한 값 : {displayValue}</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>수정</button>
    </div>
  );
};

export default TextInput;
