import React, { useState } from 'react';
import './App.css';
import CountOutput from './countOutput'
import CountInput from './countInput'

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <CountOutput count={count} />
      <CountInput count={count} setCount={setCount} />
    </div>
  );
}

export default App;
