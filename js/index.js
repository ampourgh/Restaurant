import React from 'react';
import ReactDOM from 'react-dom';
import { PizzaClass } from './PizzaList';

class PizzaDisplay extends React.Component {
  render() {

    return (
      <div>
        <h1>Pizza Toppings:</h1>
        <h2><PizzaClass /></h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PizzaDisplay />, document.getElementById('app'))
