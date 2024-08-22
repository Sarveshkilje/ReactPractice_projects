import React, { useState } from 'react'

const ObjectUpdate = () => {

    const  [car , setCar] = useState({
        year : 2024,
        make : "Ford",
        model : "Mustang"
    });

    function handleChangeYear (event){
setCar( c => ({...c, year: event.target.value}));
    }
    function handleChangeMake (event){
        setCar( c => ({...c, make: event.target.value}));
    }
    function handleChangeModel (event){
        setCar( c => ({...c, model: event.target.value}));
    }

  return (
    <>
      <div>
        <p>Your Car is : {car.year} {car.make} {car.model} </p>
        <input type='number'value={car.year} onChange={handleChangeYear}></input><br></br>
        <input type='text'value={car.make} onChange={handleChangeMake}></input><br></br>
        <input type='text'value={car.model} onChange={handleChangeModel}></input><br></br>
      </div>
    </>
  )
}

export default ObjectUpdate
