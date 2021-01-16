import React from 'react';
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
      <h3 data-testid='counter'>Counter: {store.count}</h3>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
