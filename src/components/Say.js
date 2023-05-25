import React, { useState } from "react";
import "./Say.scss";
const Say = () => {
  const [name, setName] = useState([
    {
      id: 1,
      text: "권나라",
    },
    {
      id: 2,
      text: "강지민",
    },
    {
      id: 3,
      text: "김다빈",
    },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(4);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    const nextName = name.concat({
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1);
    setName(nextName);
    setInput("");
  };
  const onRemove = (id) => {
    const remove = name.filter((names) => names.id !== id);
    setName(remove);
  };

  const list = name.map((names) => (
    <li key={names.id} onDoubleClick={() => onRemove(names.id)}>
      {names.text}
    </li>
  ));
  return (
    <div className="Say">
      <h1>TodoList</h1>
      <div className="todoListBox">
        <input placeholder="할일을 입력하세요" onChange={onChange} />
        <button onClick={onClick}>확인</button>
      </div>
      <div className="listBox">
        <ul>{list}</ul>
      </div>
    </div>
  );
};
export default Say;
