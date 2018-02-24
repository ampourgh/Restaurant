import React from 'react';

class Item extends React.Component {
  render() {
    const menuItem = this.props.item;
    return (

        <div className="w3-dropdown-hover">
          <li className="flex-row">
            <img className="image" src={menuItem.img} />
            <div className="w3-dropdown-content">
              <img src={menuItem.img} />
            </div>
          </li>

        </div>

    )
  }
}

export default Item;
