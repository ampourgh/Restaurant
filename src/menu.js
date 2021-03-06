import React from 'react';
import Item from './Item';

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
                      {id: 1, name: 'Pepperoni', price: '.99', img: '../images/pictures/1.jpg'},
                      {id: 2, name: 'Mushrooms', price: '.49', img: '../images/pictures/1.jpg'},
                      {id: 3, name: 'Onions', price: '.49', img: '../images/pictures/1.jpg'},
                      {id: 4, name: 'Sausage', price: '.99', img: '../images/pictures/1.jpg'},
                      {id: 5, name: 'Bacon', price: '.99', img: '../images/pictures/1.jpg'},
                      {id: 6, name: 'Extra cheese', price: '.49', img: '../images/pictures/1.jpg'},
                      {id: 7, name: 'Black olives', price: '.49', img: '../images/pictures/1.jpg'},
                      {id: 8, name: 'Green peppers', price: '.49', img: '../images/pictures/1.jpg'},
                      {id: 9, name: 'Pineapple', price: '.49', img: '../images/pictures/1.jpg'},
                      {id: 10, name: 'Spinach', price: '.49', img: '../images/pictures/1.jpg'}
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

export default Menu;
