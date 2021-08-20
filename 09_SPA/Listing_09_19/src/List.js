import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from './ContactContext';
import Form from './Form';
import './List.css';
import ListItem from './ListItem';

function List() {
  const [contacts, setContacts] = useContext(ContactContext);

  useEffect(() => {
    fetch('http://localhost:8001/api/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

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
      <h1 style={{ textDecoration: 'underline' }}>Kontaktliste</h1>
      <table className="contactTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vorname</th>
            <th>Nachname</th>
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
      <Link to="/form">Neu</Link>
    </>
  );
}

export default List;
