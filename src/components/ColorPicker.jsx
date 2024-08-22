
import React, { useState } from 'react'
import styles from './ColorPicker.module.css'

const ColorPicker = () => {

    const [color, setColor] = useState("#FFFFFF");

    function handleChange  (event){
        setColor(event.target.value);
    }
  return (
    <>
      <div className={styles.colorPickerContainer}>
<h1>Color</h1>
<div className="colorDisplay " style={{backgroundColor : color}}>
    <p> selected color {color}</p>
</div>
<label>Select a color</label>
<input type='color' value={color} onChange={handleChange}></input>
      </div>
    </>
  )
}

export default ColorPicker
