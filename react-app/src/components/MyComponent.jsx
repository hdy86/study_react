const MyComponent = (props) => {
  return (
    <>
      <h1>
        부모가 물려준 이름은 {props.name}입니다. <br /> {props.message}
      </h1>
      {props.children}
    </>
  );
};

export default MyComponent;
