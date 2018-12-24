import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import WideButton from './components/ButtonComponents/WideButton';



const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <WideButton text="clear" />
      <ActionButton text="÷" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <ActionButton text="x" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <ActionButton text="−" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <ActionButton text="+" />
      <WideButton text="0" />
      <ActionButton text="=" />
    </div>
  );
};

export default App;
