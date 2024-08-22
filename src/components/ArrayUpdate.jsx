import React, { useState } from 'react'

const ArrayUpdate = () => {

    const [food , setFood] = useState(["Apple", "Mango", "Banana"]);

    function addFood (){
      
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value="";

        setFood (f => [...food,newFood]);
    }
    function removeFood (index){
        setFood(food.filter((_, i) => i!==index));
    }

  return (
    <>
        <div>
    <p>List of food :</p>
    <ul >
        {food.map((food, index) =><li key={index} onClick={() =>removeFood(index) }>{food}</li>)}
    </ul>
    <input type='text'id='foodInput'placeholder='Enter Food Name'></input>
    <button onClick={addFood}> Add Food </button>
      </div>
    </>
  )
}

export default ArrayUpdate
