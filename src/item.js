import React from 'react';

class Item extends React.Component {
  render() {
    const menuItem = this.props.item;
    return (

      <li>
        {menuItem.name} ......... {menuItem.price}
      </li>
    )
  }
}

export default Item;
