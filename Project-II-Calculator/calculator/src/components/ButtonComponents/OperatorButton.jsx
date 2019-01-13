import React from 'react';
import './Button.css';

const OperatorButton = props => {
  return (
    <button
      className="button operator-button"
      name={props.name}
      onClick={props.buttonClick}
      value={props.text}
    >
      {props.text}
    </button>
  );
};

export default OperatorButton;
