import styled from "styled-components";
import { useEffect, useState } from "react";

import { getMovies } from "../../apis";

const Movie = () => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // 즉시실행함수 (IIFE)
  //   (async () => {
  //     const result = await getMovies();
  //     console.log(result);
  //   })();
  // }, []);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const result = await getMovies();
    console.log(result.items);
    setItems(result.items);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form>
        <Input />
        <BtnSearch>검색</BtnSearch>
      </Form>
      <List>
        {items.map(({ title, link, image }) => (
          <Item key={link}>
            <Thumbnail src={image} />
            <a href={link} target="_blank" rel="noreferrer">
              <Name>{title}</Name>
            </a>
          </Item>
        ))}

        {/* <Item>
          <Thumbnail src="http://gamefocus.co.kr/wys2/file_attach/2022/06/29/1656463509_80945.jpg" />
          <Name>미니언즈 2</Name>
        </Item>
        <Item>
          <Thumbnail src="https://file2.nocutnews.co.kr/newsroom/image/2022/06/22/202206220912066245_0.jpg" />
          <Name>탑건</Name>
        </Item>
        <Item>
          <Thumbnail src="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg" />
          <Name>닥터스트레인지 2</Name>
        </Item> */}
      </List>
    </>
  );
};

const Form = styled.form`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;
const List = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.h3``;

export default Movie;
