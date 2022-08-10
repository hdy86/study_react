import { useEffect, useState } from "react";

import { getBooks } from "../../apis/book";

import Pagination from "../organisms/Pagination";

import Form from "../templates/Book/Form";
import List from "../templates/Book/List";

const Book = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "" });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const refreshList = async () => {
    if (!params.query) return;

    // page => start
    const display = 10;
    const start = (page - 1) * display + 1;

    const { items, total } = await getBooks({ ...params, start });
    setItems(items);
    setTotal(total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    // 검색어와 나라필터가 바뀌면 1page 로 이동
    setPage(1);
  };

  return (
    <>
      <h1>책 검색</h1>
      <Form onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Book;
