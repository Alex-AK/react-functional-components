import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import WideButton from './WideButton';

const ButtonContainer = props => {
  // map through numbers array and return number button components
  const numberButton = props.numbers.map((number, index) => {
    return (
      <NumberButton
        text={number}
        key={'number' + index}
        clicked={props.clicked}
        buttonClick={props.buttonClick}
        number={props.number}
      />
    );
  });

  return (
    <div className="button-container">
      <WideButton
        text="clear"
        fontWeight="light"
        clearDisplay={props.clearDisplay}
        buttonClick={props.buttonClick}
      />
      {numberButton}
      <WideButton text="0" buttonClick={props.buttonClick} />
    </div>
  );
};

export default ButtonContainer;
