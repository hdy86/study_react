import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect
  // 1. 최초 랜더링(마운트) 됐을 때, 한 번만 실행하고 싶을 때
  // 2. 어떤 상태가 바뀔 때마다 함수를 실행하고 싶을 때
  useEffect(() => {
    console.log("name 랜더링 완료 " + name);

    return () => {
      console.log(name + "값이 바뀌기 직전");
    };
  }, []);

  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} />
        &nbsp;
        <input onChange={(e) => setNickname(e.target.value)} />
      </div>
      <h1>이름 : {name}</h1>
      <h1>닉네임 : {nickname}</h1>
    </>
  );
};

export default Info;
