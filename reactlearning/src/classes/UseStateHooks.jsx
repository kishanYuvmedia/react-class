import { useState } from "react";
export const UseStateHooks = () => {
  const [count, setCount] = useState(0);
    return (
      <>
        <h1>UseState Hooks Example</h1>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>  
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>Click the buttons to change the count.</p>
      </>
    )
}