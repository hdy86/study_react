import axios from "axios";

export const getMovies = async (params) => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "IH9cp0qqUm98MsaaJDw7",
      "X-Naver-Client-Secret": "owVYI7slq1",
    },
    params,
  });

  return result.data;
};
