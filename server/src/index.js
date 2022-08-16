import app from "./app.js";

const port = 8000;

app.listen(port, () => {
  console.log("서버 실행 중... port: " + port); // 서버콘솔은 터미널에 콘솔 찍힘
});
