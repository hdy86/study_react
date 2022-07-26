import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousel1 from "./Carousel1";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

const Bootstrap = () => {
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
        <Carousel1 data={images} />
        <br />
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
