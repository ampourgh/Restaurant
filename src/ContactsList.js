import React from 'react';

class ContactsList extends React.Component {
  render() {
    return (
      <li>
        {this.props.contacts.name} {this.props.contacts.phone}
      </li>
    )
  }
}

export default ContactsList;
