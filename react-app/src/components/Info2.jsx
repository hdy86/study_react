import useInputs from "../hooks/useInputs";

const Info2 = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        &nbsp;
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <br />
      <div>
        <b>이름 : </b>
        {name}
      </div>
      <div>
        <b>닉네임 : </b>
        {nickname}
      </div>
    </div>
  );
};

export default Info2;
