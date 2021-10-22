import { useState } from 'react';
import { useLS } from '../../hooks/useLS';
import Form from '../Form/Form';
import FilterSearch from '../FilterSearch/FilterSearch';
import ContactList from '../ContactList/ContactList';
import Container from '../Container/Container';
import data from '../../contacts.json';


function App() {
  
  const [contacts, setContacts] = useLS('contacts', data)
  const [filter, setFilter] = useState('');


  const handlerInputContacts = data => {
    const searchingName = contacts.some(
      element => element.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (searchingName) {
      return alert(`this contact already exists`);
    }

    setContacts([...contacts, data]);
  };

  const searchingContacts = e => {
    setFilter(e.target.value );
  };

  const getVisibleContacts = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    );
  };

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={handlerInputContacts} />
        <h2>Contacts</h2>
        <FilterSearch filter={filter} onChange={searchingContacts} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }


export default App;
