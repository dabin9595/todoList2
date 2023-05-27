import React, { useState, useMemo } from "react";
const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const newNumber = list.concat(~~number);
    setList(newNumber);
    setNumber("");
  };

  return (
    <div>
      <h1>평균값 구하기</h1>
      <input
        placeholder="평균값 숫자를 입력"
        onChange={onChange}
        value={number}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균값 :{getAverage(list)} </b>
      </div>
    </div>
  );
};
export default Average;
