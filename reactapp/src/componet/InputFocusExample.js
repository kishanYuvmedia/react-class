import React, { useRef, useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Component rendered {renderCount.current} times</p>
    </div>
  );
}

export default CounterExample;
