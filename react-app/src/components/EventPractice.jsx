import { useState } from "react";

const EventPractice = () => {
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    username2: "",
    message: "",
  });
  const { username, username2, message } = form;

  const handleClick = () => {
    alert(username + username2 + message);
    // setUsername("");
    // setMessage(""); // 값 초기화
    setForm({ username: "", username2: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    const nextForm = { ...form, [name]: value }; // form 내용을 복사한 뒤, [name] 내용이 바뀜
    setForm(nextForm);
  };

  const handleKeyUp = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={username}
      />
      <br />
      <input
        type="text"
        name="username2"
        onChange={handleChange}
        value={username2}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        onChange={handleChange}
        value={message}
        onKeyUp={handleKeyUp}
      />
      &nbsp;
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
