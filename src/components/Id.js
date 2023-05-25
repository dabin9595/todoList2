import React, { useReducer } from "react";
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Id = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div className="Id">
      <div>
        <input
          placeholder="이름"
          onChange={onChange}
          value={name}
          name="name"
        />
        <input
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
          name="nickname"
        />
      </div>
      <div>
        <b>이름 :{name}</b>
        <b>닉네임 :{nickname}</b>
      </div>
    </div>
  );
};
export default Id;
