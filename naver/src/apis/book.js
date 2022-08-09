import axios from "axios";

export const getBooks = async (params) => {
  const result = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "IH9cp0qqUm98MsaaJDw7",
      "X-Naver-Client-Secret": "owVYI7slq1",
    },
    params,
  });

  return result.data;
};
