import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Prueba from './Prueba';
import ScoreKeeper from './Scorekeeper';
import EmojiClicker from './Emojiclicker';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React State Demo</h1>
      {/* <Counter /> */}
      {/* <Prueba /> */}
      {/* <ScoreKeeper /> */}
      <EmojiClicker />
    </>
  )
}

export default App
