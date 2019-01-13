import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return <div className="display">{props.displayNumber}</div>;
};

export default CalculatorDisplay;
