import styled from "styled-components";
import { useEffect, useState } from "react";

import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";

const Movie = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "", country: "all" });

  const { query, country } = params;

  // useEffect(() => {
  //   // 즉시실행함수 (IIFE)
  //   (async () => {
  //     const result = await getMovies();
  //     console.log(result);
  //   })();
  // }, []);

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    const params = { query };
    if (country !== "all") {
      params.country = country;
    }
    const result = await getMovies(params);
    setItems(result.items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List>
        {items.map(({ title, link, image }) => (
          <Item key={link}>
            <Thumbnail src={image} />
            <a href={link} target="_blank" rel="noreferrer">
              <Name dangerouslySetInnerHTML={{ __html: title }}></Name>
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
const Name = styled.p``;

export default Movie;
