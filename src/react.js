
class PizzaClass extends React.Component {
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


const Item = React.createClass({


  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const menuItem = this.props.item;
    return (
      <div>
        <li className="flex-row">
            this
          <img className="image" src={menuItem.img} />
        </li>

      </div>

    );
  }
});

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    const menuItems = [
                      {id: 1, name: 'Pepperoni', price: '.99', img: './images/pictures/1.jpg'},
                      {id: 2, name: 'Mushrooms', price: '.49', img: './images/pictures/1.jpg'},
                      {id: 3, name: 'Onions', price: '.49', img: './images/pictures/1.jpg'},
                      {id: 4, name: 'Sausage', price: '.99', img: './images/pictures/1.jpg'},
                      {id: 5, name: 'Bacon', price: '.99', img: './images/pictures/1.jpg'},
                      {id: 6, name: 'Extra cheese', price: '.49', img: './images/pictures/1.jpg'},
                      {id: 7, name: 'Black olives', price: '.49', img: './images/pictures/1.jpg'},
                      {id: 8, name: 'Green peppers', price: '.49', img: './images/pictures/1.jpg'},
                      {id: 9, name: 'Pineapple', price: '.49', img: './images/pictures/1.jpg'},
                      {id: 10, name: 'Spinach', price: '.49', img: './images/pictures/1.jpg'}
                    ];

    let filteredItems = menuItems.filter(
      (item) => {
        return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div>
        <img className="search-icon" src="../images/search-icon.png"></img>
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <ul>
          {filteredItems.map((item)=> {
              return <Item item={item} key={item.id}/>
          })}
        </ul>
      </div>
    )

  }
}

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

ReactDOM.render(<PizzaDisplay />, document.getElementById('filter-options'))
ReactDOM.render(<App />, document.getElementById('app'));
