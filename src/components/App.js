import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {increment, decrement } from "../actions/action";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  }

  const dec = () => {
    dispatch(decrement());
  }

  return (
    <div id='main'>
      <div data-testid="counter">{store.counter}</div>
      <button onClick={inc} style={{marginRight: 10+"px"}}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
