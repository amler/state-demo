import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React State Demo</h1>
      <Counter />
    </>
  )
}

export default App
