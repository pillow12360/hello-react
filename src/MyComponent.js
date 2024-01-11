import React from "react";

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      나의 새롭고 신기한 {name} 컴포넌트입니다. children 값은 {children}
    </div>
  );
};

export default MyComponent;
// 다른 파일에서 import 할때 MyComponent 클래스를 불러오도록 설정 한 것 이다.
