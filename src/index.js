import React from 'react';
import ContactsList from './ContactsList'

let contacts = [{
  id: 1,
  name: 'Nolan',
  phone: '5'
}, {
  id: 2,
  name: 'Stephen',
  phone: '1'
}, {
  id: 3,
  name: 'Stan',
  phone: '2'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts:</h1>
        <ContactsList />
      </div>
    )
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
