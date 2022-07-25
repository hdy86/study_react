import { useState, useRef } from "react";
import styled from "styled-components";

import Form from "./Form";
import List from "./List";

// const todoList = [
//   {
//     id: 1,
//     content: "할일1",
//     checked: false,
//   },
//   {
//     id: 2,
//     content: "할일2",
//     checked: true,
//   },
//   {
//     id: 3,
//     content: "할일3",
//     checked: false,
//   },
// ];

const Todo = () => {
  // 리스트 관리
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const handleAdd = (content) => {
    const nextTodo = [
      ...todos,
      { id: nextId.current, content, checked: false },
    ];
    setTodos(nextTodo);
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const nextTodo = todos.filter((todo) => todo.id !== deleteId);
    setTodos(nextTodo);
  };

  const handleChecked = (checkId) => {
    const nextTodo = todos.map((todo) =>
      // 삼항연산자 - 조건 ? true일 때 : false일 때
      todo.id === checkId ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(nextTodo);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd} />
        <List data={todos} onDelete={handleDelete} onChecked={handleChecked} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`;
const Title = styled.div`
  background: #22b8cf;
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;

export default Todo;
