import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, dispatch] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>닉네임 : {nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
