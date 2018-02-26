import React from 'react';

class Item extends React.Component {
  render() {
    const menuItem = this.props.item;
    return (

      <div className="carousel-item">
        <div>
            <img src={menuItem.img} width="1100" height="500" />
        </div>
        <div className="carousel-caption">
          <h3>{menuItem.name}</h3>
        </div>
      </div>
    )
  }
}

export default Item;
