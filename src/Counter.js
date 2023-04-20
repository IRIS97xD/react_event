import { useState } from 'react';

const Counter = () => {
  const increase = () => {};

  return (
    <>
      <div>숫자 카운터</div>
      <h1>0</h1>

      <button onClick={increase}>더하기</button>
    </>
  );
};

export default Counter;