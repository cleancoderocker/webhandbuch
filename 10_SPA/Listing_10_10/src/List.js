import { useState, useEffect } from 'react';
import './List.css';
import ListItem from './ListItem';

function List() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <>
      <h1 style={{ textDecoration: 'underline' }}>Kontaktliste</h1>
      <table className="contactTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ListItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
