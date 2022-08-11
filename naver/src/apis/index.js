import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "IH9cp0qqUm98MsaaJDw7",
    "X-Naver-Client-Secret": "owVYI7slq1",
  },
});

export const getMovies = async (params) => {
  const result = await instance.get("/v1/search/movie.json", {
    params,
  });

  return result.data;
};

export const getBooks = async (params) => {
  const result = await instance.get("/v1/search/book.json", {
    params,
  });

  return result.data;
};

export const getBook = async (params) => {
  const result = await instance.get("/v1/search/book_adv.json", {
    params,
  });

  return result.data;
};
