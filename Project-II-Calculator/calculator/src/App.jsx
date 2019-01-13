import React, { Component } from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.jsx';
import ButtonContainer from './components/ButtonComponents/ButtonContainer.jsx';
import OperatorContainer from './components/ButtonComponents/OperatorContainer.jsx';

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];

const operators = ['÷', 'x', '-', '+', '='];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNumber: 1
    };
  }

  clearDisplay = () => {
    this.setState({ displayNumber: 0 });
    // console.log(this.state.displayNumber);
  };

  clicked = () => {
    console.log(this.state.displayNumber);
  };

  render() {
    return (
      <div className="container">
        <CalculatorDisplay displayNumber={this.state.displayNumber} />
        <ButtonContainer
          numbers={numbers}
          clicked={this.clicked}
          clearDisplay={this.clearDisplay}
        />
        <OperatorContainer operators={operators} />
      </div>
    );
  }
}

export default App;
