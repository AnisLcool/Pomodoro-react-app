import React from 'react';
import "./Button.css";

function Button(props) {
    return (
    <button><i className={props.class}></i></button>
    );
}

export default Button;