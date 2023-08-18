import { useState } from 'react';

const initialContacts = [
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
];

function List() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
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
  );
}

export default List;
