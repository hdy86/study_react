const Jsx = () => {
  const name = "리액트";
  const showModal = true;
  const name2 = "앵귤러";

  // name === "리액트" ? "맞습니다" : "틀립니다" // 삼항연산자

  return (
    <>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
      {showModal && <h1>모달입니다.</h1>}
      <h1>{name2 || "값이 없습니다."}</h1>
      <input />
    </>
  );
};

export default Jsx;
