import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu'
import { PizzaClass } from './PizzaList';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Search for images of food with keywords</p>
        <Menu />
      </div>
    )
  }
}

class PizzaDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>Toppings</h1>
        <PizzaClass />
      </div>
    );
  }
}

ReactDOM.render(<PizzaDisplay />, document.getElementById('app2'))
ReactDOM.render(<App />, document.getElementById('app'));
