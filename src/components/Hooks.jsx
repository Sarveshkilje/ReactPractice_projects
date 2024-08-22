import React, { useState } from "react";

function Hooks() {
  const [name, setName] = useState("Guest");
  const [age, setAge] =useState(0);
  const [isEmployed, setisEmployed] =useState(false);

  const updateName = () => {
    setName("Sarvesh");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const ToggleEmployee = () => {
    setisEmployed(!isEmployed);
  };
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age age</button>

      <p>isEmployed {isEmployed ? "yes" : "No"}</p>
      <button onClick={ToggleEmployee}>ToggleEmploye</button>
    </>
  );
}

export default Hooks;
