import { useState, useRef } from "react";
import styled from "styled-components";

const Form = ({ onAdd }) => {
  // 입력 관리
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  const handleAdd = () => {
    onAdd(text);
    setText("");
    inputEl.current.focus();
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <InputWrapper>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp}
        ref={inputEl}
        placeholder="할 일을 입력하세요."
      />
      <BtnSubmit onClick={handleAdd}>+</BtnSubmit>
    </InputWrapper>
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
