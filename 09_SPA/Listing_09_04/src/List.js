import { useState } from 'react';

const initialContacts = [
  {
    id: 1,
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'maxmustermann@example.com',
  },
  {
    id: 2,
    firstName: 'Erika',
    lastName: 'Mustermann',
    email: 'erikamustermann@example.com',
  },
];

function List() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>E-Mail</th>
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
  );
}

export default List;
