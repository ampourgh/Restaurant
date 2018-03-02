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
                      {id: 1, name: 'Pepperoni', img: '../images/pictures/pizza1.jpg'},
                      {id: 2, name: 'Mushrooms', img: '../images/pictures/pizza2.jpg'},
                      {id: 3, name: 'Onions', img: '../images/pictures/pizza3.jpg'},
                      {id: 4, name: 'Sausage', img: '../images/pictures/pizza4.jpg'},
                      {id: 5, name: 'Bacon', img: '../images/pictures/pizza5.jpg'},
                      {id: 6, name: 'Extra cheese', img: '../images/pictures/1.jpg'},
                      {id: 7, name: 'Black olives', img: '../images/pictures/1.jpg'},
                      {id: 8, name: 'Green peppers', img: '../images/pictures/1.jpg'},
                      {id: 9, name: 'Pineapple', img: '../images/pictures/1.jpg'},
                      {id: 10, name: 'Pineapple', img: '../images/pictures/1.jpg'},
                      {id: 11, name: 'Pineapple', img: '../images/pictures/1.jpg'},
                      {id: 12, name: 'Spinach', img: '../images/pictures/1.jpg'}
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
        <nav className="thisNav">
          <ul>
            {filteredItems.map((item)=> {
                return <Item item={item} key={item.id}/>
            })}
          </ul>
        </nav>
      </div>
    )

  }
}

export default Menu;
