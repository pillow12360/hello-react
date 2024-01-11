import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const clickHandle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div>
      <h1>{isToggled ? "켜짐" : "꺼짐"}</h1>
      <button onClick={clickHandle}>버튼입니당</button>
    </div>
  );
};

export default ToggleSwitch;
