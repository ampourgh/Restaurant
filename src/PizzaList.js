import React from 'react';

export class PizzaClass extends React.Component {
  render() {

    const pizzas = [
                      {id: 1, name: 'Pepperoni', price: '.99'},
                      {id: 2, name: 'Mushrooms', price: '.49'},
                      {id: 3, name: 'Onions', price: '.49'},
                      {id: 4, name: 'Sausage', price: '.99'},
                      {id: 5, name: 'Bacon', price: '.99'},
                      {id: 6, name: 'Extra cheese', price: '.49'},
                      {id: 7, name: 'Black olives', price: '.49'},
                      {id: 8, name: 'Green peppers', price: '.49'},
                      {id: 9, name: 'Pineapple', price: '.49'},
                      {id: 10, name: 'Spinach', price: '.49'}
                    ];

    const pizzaList = pizzas.map((pizza, i) => {
      return (
        <li>
          <div className="font-weight">{pizza.name}</div>
          <div>{pizza.price}</div>
        </li>
      )
    });

    return <nav>{pizzaList}</nav>;
  }
}
