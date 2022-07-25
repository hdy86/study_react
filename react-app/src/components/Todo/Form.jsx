import { useState, useRef } from "react";
import styled from "styled-components";

const Form = ({ onAdd }) => {
  // 입력 관리
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
    inputEl.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputEl}
          placeholder="할 일을 입력하세요."
        />
        <BtnSubmit>+</BtnSubmit>
      </InputWrapper>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
  height: 40px;
`;
const Input = styled.input`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
`;
const BtnSubmit = styled.button`
  border: none;
  color: #fff;
  font-size: 24px;
  width: 40px;
  background: #868e96;
  cursor: pointer;
`;

export default Form;
