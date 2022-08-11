import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getBook } from "../../apis";

const BookDetail = () => {
  const { isbn } = useParams(); // 링크 뒤 query string
  const [book, setBook] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const { items } = await getBook({ d_isbn: isbn });
    setBook(items[0]);
  };

  const { image, title, author } = book;

  return (
    <>
      <img
        src={image}
        style={{ display: "block", width: "90%", margin: "20px auto" }}
      />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </>
  );
};

export default BookDetail;
