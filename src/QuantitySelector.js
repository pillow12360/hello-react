import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0); //주문 수량
  const handleIncrease = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDcrease = () => {
    setQuantity((prevState) => {
      if (prevState !== 0) {
        return (prevState = prevState - 1);
      } else {
        return (prevState = 0);
      }
    });
  };

  return (
    <div>
      <h1>주문 수량 선택</h1>
      <span>주문 수량 : {quantity}</span>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDcrease}>감소</button>
    </div>
  );
};

export default QuantitySelector;
