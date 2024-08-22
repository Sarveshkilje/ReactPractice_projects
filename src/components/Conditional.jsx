import React from "react";

const Conditional = (props) => {
  //   if(props.isLoggedIn){
  //     return<h2>welcome{props.username}</h2>
  //   }
  //   else{
  //     return<h2>Please Log in </h2>
  //   }
  const welcome = <h2>welcome{props.username}</h2>;
  const LogedIn = <h2>Please Log in </h2>;

  return props.isLoggedIn ? welcome : LogedIn;
};

export default Conditional;
