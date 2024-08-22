import React, { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  function handleName(event) {
    setName(event.target.value);
  }
  function handleQuantity(event) {
    setQuantity(event.target.value);
  }
  function handleComment(event) {
    setComment(event.target.value);
  }
  function handlePayment(event) {
    setPayment(event.target.value);
  }
  function handleShipping(event) {
    setShipping(event.target.value);
  }


  return (
    <>
      <input value={name} onChange={handleName}></input>
      <p>name : {name}</p>
      <input value={quantity} onChange={handleQuantity} type="number"></input>
      <p>quantity : {quantity}</p>
      <textarea value={comment} onChange={handleComment}></textarea>
      <p>comment : {comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option>Visa</option>
        <option>MasterCArd</option>
        <option>GiftCard</option>
      </select>
      <p>payment : {payment}</p>

      <label>
        <input type="radio" value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShipping}
        ></input>
        Delivery
      </label>

      <label>
        <input type="radio" value="Pick Up"
        checked={shipping === "Pick Up"}
        onChange={handleShipping}
        ></input>
   Pick Up
      </label>
      <p>shipping: {shipping}</p>
    </>
  );
};

export default OnChange;
