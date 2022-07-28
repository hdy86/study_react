import { useState } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousel from "./Carousel";
import ModalName from "./Modal/ModalName";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";
import Modal from "./Modal";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalNickname, setShowModalNickname] = useState(false);
  const [name, setName] = useState("홍길동");
  const [nickname, setNickname] = useState("별명");

  return (
    <>
      <Layout>
        <Accordion data={data1} />
        <Accordion data={data2} />
        <Dropdown />
        &nbsp;
        <Dropdown2 />
        <br />
        <br />
        <Carousel data={images} type="fade-in" />
        <br />
        <Carousel data={images} type="slide" />
        <br />
        <div>
          이름 : {name} &nbsp;
          <Modal
            activator={(onOpen) => (
              <button onClick={onOpen}>이름 바꾸기</button>
            )}
            content={(onClose) => (
              <ModalName
                type="이름"
                name={name}
                onClose={onClose}
                onChange={(val) => setName(val)}
              />
            )}
          />
        </div>
        <br />
        <div>
          닉네임 : {nickname} &nbsp;
          <Modal
            activator={(onOpen) => (
              <button onClick={onOpen}>닉네임 바꾸기</button>
            )}
            content={(onClose) => (
              <ModalName
                type="닉네임"
                name={nickname}
                onClose={onClose}
                onChange={(val) => setNickname(val)}
              />
            )}
          />
        </div>
        <br />
        <br />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
