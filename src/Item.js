import React from 'react';

class Item extends React.Component {
  render() {
    const menuItem = this.props.item;
    return (

      <li className="flex-row">
        <img className="image" src={menuItem.img}  />
      </li>
    )
  }
}

export default Item;
