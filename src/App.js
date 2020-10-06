import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

const contactsArr = [...contacts].slice(0,5);

class App extends React.Component {
  state = {
    contacts: contactsArr,
  };

  addRandom = () => {
    const randomContacts = [...this.state.contacts]
    randomContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({
    contacts: randomContacts,
  })
}

  sortByName = () => {
    const randomContacts = [...this.state.contacts];
    randomContacts.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      contacts: randomContacts,
    })
  }

  sortByPopularity = () => {
    const randomContacts = [...this.state.contacts];
    randomContacts.sort((a,b) => b.popularity - a.popularity);
    this.setState({
      contacts: randomContacts,
    })
  }

  deleteContact = (i) => {
    this.setState({
      contacts: this.state.contacts.filter((contact, index) => {
        return index !== i;
      }),
    });
  };
  

  render() {
    return (
<div>
  <h1>IronContacts</h1>
  <button onClick={this.addRandom}>Add Random Contact</button>
  <button onClick={this.sortByName}>Sort by name</button>
  <button onClick={this.sortByPopularity}>Sort by popularity</button>
    <table className="Contacts">
    <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          </tr>
          </thead>
        <tbody>
          {this.state.contacts.map((contact, i)=> (
            <tr>
              <td>
                <img className="pictureUrl" src={contact.pictureUrl} alt=""/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td><button onClick={(event) => this.deleteContact(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>

    );
  }

}

export default App;
