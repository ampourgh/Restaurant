import React from 'react';
import ReactDOM from 'react-dom';

const pizzas = [{name: 'Pepperoni', img: 'blank'},
                {name: 'Mushrooms', img: 'blank'},
                {name: 'Onions', img: 'blank'},
                {name: 'Sausage', img: 'blank'},
                {name: 'Bacon', img: 'blank'},
                {name: 'Extra cheese', img: 'blank'},
                {name: 'Black olives', img: 'blank'},
                {name: 'Green peppers', img: 'blank'},
                {name: 'Pineapple', img: 'blank'},
                {name: 'Spinach', img: 'blank'}];

const pizzaList = pizzas.map((pizza, i) =>
  <div>
	 <div key={'pizza_' + i}>{pizza.name}</div>
   <img src={pizza.img}
        alt={pizza.name}/>
  </div>

);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{pizzaList}</ul>,
		document.getElementById('app'))
