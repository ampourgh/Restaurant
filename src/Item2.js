import React from 'react';

class Item2 extends React.Component {
  render() {
    const menuItem = this.props.item;

      return (
        <li data-target="#demo" data-slide-to={menuItem.id}></li>
      )
  }
}

export default Item2;
