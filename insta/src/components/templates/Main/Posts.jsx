import styled from "styled-components";
import { useEffect, useState } from "react";

import PostApis from "../../../apis/post.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const posts = await PostApis.getPosts();
    setPosts(posts);
  };

  return (
    <List>
      {posts.map(({ id, name, images, content }) => (
        <Item key={id}>
          <Header>
            <Profile src="https://cdn-icons-png.flaticon.com/512/1361/1361876.png" />
            {name}
          </Header>
          <Images>
            {images.map((image) => (
              <Image key={image} src={image} />
            ))}
          </Images>
          <Body>{content}</Body>
        </Item>
      ))}
      {/* <Item>
        <Header>
          <Profile src="https://cdn-icons-png.flaticon.com/512/1361/1361876.png" />
          user name
        </Header>
        <Images>
          <Image src="https://img.seoul.co.kr/img/upload/2021/11/16/SSI_20211116180452.jpg" />
          <Image src="https://post-phinf.pstatic.net/MjAxNzA5MjBfMjI1/MDAxNTA1ODg0NjMyNDgw.9GzMHmgvTppZHJAb2BOq1pdQJQqX79NTv003csX-Q6cg.k88VnGh5SQbQiZkDllPRYrmX0kWu1kd0u3CsqWPkfRsg.PNG/20170920_134618.png?type=w1200" />
        </Images>
        <Body>웰시코기다!</Body>
      </Item> */}
    </List>
  );
};

const List = styled.div`
  margin: 20px 0;
`;
const Item = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;

  & + & {
    margin-top: 20px;
  }
`;
const Header = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 16px;
  box-sizing: border-box;
`;
const Profile = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const Images = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Body = styled.div`
  padding: 15px;
  box-sizing: border-box;
`;

export default Posts;
