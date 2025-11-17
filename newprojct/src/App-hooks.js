import logo from './logo.svg';
import './App.css';
import CustomHook from './hooks/customhook';
function App(){
  const {count, increment, decrement} = CustomHook(1);
  return (
    <div className="App">
     <h1>{count}</h1>
     <h1>{increment}</h1>
     <h1>{decrement}</h1>
    </div>
  );
}

export default App;
