import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ActionButton fontWeight="light" text="clear" />
      <NumberButton backgroundColor="crimson" text="÷" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton backgroundColor="crimson" text="x" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton backgroundColor="crimson" text="−" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton backgroundColor="crimson" text="+" />
      <ActionButton text="0" />
      <NumberButton backgroundColor="crimson" text="=" />
    </div>
  );
};

export default App;
