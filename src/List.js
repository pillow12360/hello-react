import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const [content, contentSet] = useState("");

  const inputHandle = (event) => {
    contentSet(event.target.value);
  };

  const onSubmit = (event) => {
    setList((list) => [...list, content]);
    contentSet("");
  };

  return (
    <div>
      <input value={content} onChange={inputHandle} />
      <button onClick={onSubmit}>항목 추가</button>
      <br />
      <b>
        값 :{" "}
        {list.map((a) => (
          <div>{a}</div>
        ))}
      </b>
    </div>
  );
};

export default List;
