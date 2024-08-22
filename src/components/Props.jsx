import React from 'react'
import PropTypes from 'prop-types'

const Props = (props) => {
  return (
    <div>
       <h1>name : {props.name}</h1>
       <h1>isStudent : {props.isStudent ? "yes" : "no"}</h1>
       <h1>age : {props.age}</h1>
    </div>
  )
}
Props.PropTypes ={
    name:PropTypes.string,
    isStudent : PropTypes.bool,
    age : PropTypes.number
};

Props.defaultProps = {
    name: "Guest",
    isStudent: true,
    age: 18
  };

export default Props