import Jsx from "./components/Jsx";
import InlineStyle from "./components/InlineStyle";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import IternationSample from "./components/IterationSample";

function App() {
  const name1 = "리액트";
  return (
    <>
      {/* 220714 */}
      <IternationSample />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* 220712 */}
      <Jsx />
      <br />
      <br />
      <InlineStyle />
      <MyComponent name={name1} message="반가워요 ^^" />
      <MyComponent name={"뷰"} message="감사합니다 (꾸벅)" />
      <MyComponent name={"앵귤러"}>
        <h1>h1 이에요</h1>
        <h5>h5 이에요</h5>
      </MyComponent>

      {/* 220713 */}
      <Counter />
      <br />
      <br />
      <Say />
      <EventPractice />
      <br />
      <br />

      {/* 220714 */}
      {/* <IternationSample /> */}
    </>
  );
}

export default App;
