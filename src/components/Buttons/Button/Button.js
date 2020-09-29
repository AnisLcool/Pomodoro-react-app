import React from 'react';
import "./Button.css";

function Button(props) {
    console.log("button render")
    return (
    <button  onClick={props.click} id={props.id}><i className={props.class}
     ></i></button>
    );
}

export default Button;