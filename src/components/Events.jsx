import React from 'react'

const Events = () => {

  // const eventHandle = (name) => console.log(`${name}Ouchh`);
const handleClick = (e) => e.target.textContent = "Ouchh";

  return (
<button onClick={(e) =>handleClick(e)}>
    CLick Me
</button>

  )
}

export default Events
