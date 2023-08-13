import { useState, useEffect } from 'react';
import Form from './Form';
import './List.css';
import ListItem from './ListItem';

function List() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      firstName: 'Erica',
      lastName: 'Doe',
      email: 'ericadoe@example.com',
    },
  ]);

  useEffect(() => {
    // fetch('http://localhost:8001/api/contacts')
    //   .then((response) => response.json())
    //   .then((data) => setContacts(data));
  }, []);

  function handleSave(contact) {
    fetch(`http://localhost:8001/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    }).then((response) => {
      if (response.status === 201) {
        const id = response.headers.get('Location').split('/').pop();
        setContacts((prevContacts) => [...prevContacts, { ...contact, id }]);
      }
    });
  }

  function handleDelete(contact) {
    fetch(`http://localhost:8001/api/contacts/${contact.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setContacts((prevState) =>
          prevState.filter((prevContact) => prevContact.id !== contact.id),
        );
      }
    });
  }

  return (
    <>
      <h1 style={{ textDecoration: 'underline' }}>Contact list</h1>
      <table className="contactTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ListItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <Form onSave={handleSave} />
    </>
  );
}

export default List;
