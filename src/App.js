import { useState, useEffect } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(window.localStorage.getItem('count', count));

  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);

  }, [count]);

  const increment = () => {
    setCount(count => parseInt(count) + 1);
  }

  const decrement = () => {
    if (count !== 0)
      setCount(count => parseInt(count) - 1);
  }

  return (
    <>
      <div className="App">
        <span>{count}</span>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
      <Counter />
    </>
  );
}

export default App;
