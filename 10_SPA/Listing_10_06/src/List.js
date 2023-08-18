import { useState, useEffect } from 'react';

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
      <table>
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
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
