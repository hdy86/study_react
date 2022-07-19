import { useState, useRef } from "react";

const IternationSample = () => {
  const [text, setText] = useState("");
  // const names = ["눈사람", "얼음", "눈", "바람", "구름"];
  const [names, setNames] = useState([
    { id: 1, text: "얼음" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "구름" },
  ]);
  // const [nextId, setNextId] = useState(5);
  const nextId = useRef(5);

  const handleClick = () => {
    // alert(text);
    if (!text) return;

    const nextNames = [...names, { id: nextId.current, text }];
    setNames(nextNames);
    setText("");
    // setNextId(nextId + 1);
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    // alert(deleteId);
    const nextNames = names.filter((e) => {
      return e.id !== deleteId;
    });
    setNames(nextNames);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        &nbsp;
        <button onClick={handleClick}>추가</button>
      </div>
      {/* <ul>
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul> */}
      <ul>
        {names.map(({ id, text }) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IternationSample;
