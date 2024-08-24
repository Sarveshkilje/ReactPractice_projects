import React, { useState, useEffect } from "react";

const UseEffects = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
      document.title = `count: ${count} ${color}`;
  }, [count,color]);

  function addValue() {
      setCount(c => c + 1);
  }

  function subValue() {
      setCount(c => c - 1);
  }

  function changeColor() {
  setColor(c => c === "green" ? "red" : "green" );
  }

  return (
    <div>
      <p style={{color: color}}>count: {count}</p>
            <button onClick={addValue}>Add</button>
            <button onClick={subValue}>Subtract</button>
            <button onClick={changeColor}>Subtract</button>

    </div>
  );
};

export default UseEffects;
