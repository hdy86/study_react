import { useState } from "react";

const Counter2 = () => {
  const [num, setNum] = useState(7);
  const handleClick = (n) => {
    alert("카운터 값이 수정됩니다.");
    setNum(num + n);
  };

  return (
    <>
      <h1>현재 카운터 값은 {num} 입니다.</h1>
      <button onClick={() => handleClick(3)}>+3</button>
      &nbsp;
      <button onClick={() => handleClick(1)}>+1</button>
      &nbsp;
      <button onClick={() => handleClick(-1)}>-1</button>
      &nbsp;
      <button onClick={() => handleClick(-10)}>-10</button>
    </>
  );
};

export default Counter2;
