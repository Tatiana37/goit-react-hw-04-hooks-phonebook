import { Component } from 'react';
import Form from '../Form/Form';
import FilterSearch from '../FilterSearch/FilterSearch';
import ContactList from '../ContactList/ContactList';
import Container from '../Container/Container';
import data from '../../contacts.json';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts){
      this.setState({contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState ){

    if(this.state.contacts !== prevState.contacts){

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

  }

  handlerInputContacts = data => {
    const searchingName = this.state.contacts.some(
      element => element.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (searchingName) {
      return alert(`this contact already exists`);
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  searchingContacts = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const {
      handlerInputContacts,
      searchingContacts,
      getVisibleContacts,
      deleteContact,
    } = this;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={handlerInputContacts} />
        <h2>Contacts</h2>
        <FilterSearch filter={this.state.filter} onChange={searchingContacts} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }
}

export default App;
