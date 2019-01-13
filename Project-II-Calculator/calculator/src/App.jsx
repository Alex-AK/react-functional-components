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
      displayNumber: 1,
      text: []
    };
  }

  clearDisplay = () => {
    this.setState({ text: 0 });
  };

  //  - Create some `handler functions` that can take in some information from an, `onClick` and use that information to update the `total` on the App state.
  buttonClick = event => {
    let newArray = this.state.text;
    newArray.push(event.target.value);
    this.setState({ text: newArray });
    if (event.target.value === '=') {
      this.calculate();
    }
  };

  calculate = () => {
    const { text } = this.state;
    // const lastItem = text[text.length - 1];
    if (text.length > 0) {
      text.pop();
      this.setState({ text: [eval(text.join(''))] });
      console.log(eval(text.join('')));
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="container">
        <CalculatorDisplay displayNumber={this.state.text.join('')} />
        <ButtonContainer
          numbers={numbers}
          clicked={this.clicked}
          clearDisplay={this.clearDisplay}
          buttonClick={this.buttonClick}
        />
        <OperatorContainer
          operators={operators}
          buttonClick={this.buttonClick}
        />
      </div>
    );
  }
}

export default App;
