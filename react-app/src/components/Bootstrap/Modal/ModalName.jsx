import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ name, type, onClose, onChange }) => {
  const [text, setText] = useState(name);

  const handleSubmit = () => {
    onChange(text);
    alert("이름이 '" + text + "'(으)로 수정됩니다.");
    onClose();
  };

  return (
    <>
      <Backdrop
        onClick={(e) => {
          if (e.currentTarget === e.target) onClose();
        }}
      >
        <ModalContainer>
          <Header>{type} 바꾸기</Header>
          <Body>
            <Input
              placeholder={`${type}을 입력하세요`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Body>
          <Footer>
            <BtnClose onClick={onClose}>닫기</BtnClose>
            <BtnSubmit onClick={handleSubmit}>저장</BtnSubmit>
          </Footer>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const ModalContainer = styled.div`
  background: #fff;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;
const Header = styled.div`
  font-size: 20px;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
`;
const Body = styled.div`
  padding: 15px;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
`;
const Footer = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;
const BtnClose = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 10px;
`;
const BtnSubmit = styled.button`
  background: royalblue;
  color: #fff;
  border: 1px solid royalblue;
  border-radius: 4px;
  padding: 5px 10px;
  margin-left: 10px;
`;

export default ModalName;
