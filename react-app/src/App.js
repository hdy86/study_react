import Jsx from "./components/Jsx";
import InlineStyle from "./components/InlineStyle";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import IternationSample from "./components/IterationSample";
import Counter2 from "./components/Counter2";
// import Info from "./components/Info";
import Parent from "./components/Parent";
import Counter3 from "./components/Counter3";
import Info2 from "./components/Info2";
import Average from "./components/Average";
import InputFile from "./components/InputFile";
import StyledComponent from "./components/StyledComponent";
import Flex from "./components/Flex";
import Todo from "./components/Todo";
import Axios from "./components/Axios";
import Bootstrap from "./components/Bootstrap";

function App() {
  const name1 = "리액트";
  return (
    <>
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
      <IternationSample /> {/* 220719 수정 */}
      <br />
      {/* 220718 */}
      <Counter2 />
      <br />
      <br />
      {/* <Info /> */}
      <Parent />
      <Counter3 />
      <br />
      <Info2 /> {/* 220719 수정 */}
      <br />
      <Average />
      <br />
      <br />
      {/* 220719 */}
      <InputFile />
      <br />
      <br />
      <StyledComponent />
      <br />
      <Flex />
      {/* 220720 */}
      <Todo />
      <br />
      <br />
      {/* 220721 */}
      <Axios />
      {/* 220721, 220725, 220726 */}
      <Bootstrap />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
