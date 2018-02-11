import React from 'react';

export class PizzaClass extends React.Component {
  render() {

    const pizzas = [{name: 'Pepperoni', img: '../images/icons/pizza.png'},
                    {name: 'Mushrooms', img: '../images/icons/pizza.png'},
                    {name: 'Onions', img: '../images/icons/pizza.png'},
                    {name: 'Sausage', img: '../images/icons/pizza.png'},
                    {name: 'Bacon', img: '../images/icons/pizza.png'},
                    {name: 'Extra cheese', img: '../images/icons/pizza.png'},
                    {name: 'Black olives', img: '../images/icons/pizza.png'},
                    {name: 'Green peppers', img: '../images/icons/pizza.png'},
                    {name: 'Pineapple', img: '../images/icons/pizza.png'},
                    {name: 'Spinach', img: '../images/icons/pizza.png'}];

    const pizzaList = pizzas.map((pizza, i) => {
      return (
        <nav>
          <div key={'pizza_' + i}>{pizza.name}</div>
          <img src={pizza.img}
               alt={pizza.name}/>
        </nav>
      )
    });

    return <nav>{pizzaList}</nav>;
  }
}
