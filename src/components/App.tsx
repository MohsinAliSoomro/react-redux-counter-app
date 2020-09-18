import React, { useState } from 'react';
import './App.css';
import CountOutput from './countOutput'
import CountInput from './countInput'
type ICount ={
  count:number
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountOutput count={count} />
      <CountInput count={count}  />
    </div>
  );
}

export default App;
