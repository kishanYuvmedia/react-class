import './App.css';
import { useRef,useState } from 'react';
function App() {
  const [count, setcount] = useState(1);
  const number = useRef(1);
  const handleClick = () => {
    setcount(count+1);
    number.current = number.current + 1;
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Increment</button>
      <h1>{count}</h1>
    <input type="number" ref={number} />
    </div>
  );
}

export default App;
