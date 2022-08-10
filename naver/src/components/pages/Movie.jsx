import { useEffect, useState } from "react";

import { getMovies } from "../../apis";

import Pagination from "../organisms/Pagination";

import Form from "../templates/Movie/Form";
import List from "../templates/Movie/List";

const Movie = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "", country: "all" });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

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
  }, [params, page]);

  const refreshList = async () => {
    if (!query) return;

    // page => start
    const display = 10;
    const start = (page - 1) * display + 1;

    const params = { query, start };

    if (country !== "all") {
      params.country = country;
    }
    const { items, total } = await getMovies(params);
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
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Movie;
