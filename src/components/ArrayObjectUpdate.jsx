import React, { useState } from "react";

const ArrayObjectUpdate = () => {
  const [car, setCar] = useState([""]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCar((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function removeCar(index) {
setCar( c => c.filter((_,i)=> i !== index))
  }
  function yearChange(event) {
    setCarYear(event.target.value);
  }
  function makeChange(event) {
    setCarMake(event.target.value);
  }
  function modelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List Car objects</h2>
      <ul>
        {car.map((car, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {car.year}
            {car.make}
            {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={yearChange}></input>
      <br></br>
      <input type="text" value={carMake} onChange={makeChange}></input>
      <br></br>
      <input type="text" value={carModel} onChange={modelChange}></input>
      <br></br>
      <button onClick={addCar}>Add Car</button>
    </div>
  );
};

export default ArrayObjectUpdate;
