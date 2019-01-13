import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button
      className={`button number-button ${props.width} ${props.fontWeight}`}
      onClick={props.buttonClick}
      value={props.text}
    >
      {props.text}
    </button>
  );
};

export default NumberButton;
