import React from 'react';

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;


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
          <Button onClick={this.open}>
            this
          </Button>
          <img className="image" src={menuItem.img} />
        </li>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <img className="image" src={menuItem.img} />
          </Modal.Body>
        </Modal>
      </div>

    );
  }
});

export default Item;
