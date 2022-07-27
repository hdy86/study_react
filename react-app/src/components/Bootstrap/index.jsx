import { useState } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousel from "./Carousel";
import ModalName from "./Modal/ModalName";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("홍길동");

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
          {name} &nbsp;
          <button onClick={() => setShowModal(true)}>이름 바꾸기</button>
          {showModal && (
            <ModalName
              name={name}
              onClose={() => setShowModal(false)}
              onChange={(val) => setName(val)}
            />
          )}
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
