import { useState } from 'react';
const initialContact = {
  firstName: '',
  lastName: '',
  email: '',
};

function Form({ onSave }) {
  const [contact, setContact] = useState(initialContact);

  function handleChange(e) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setContact((prevContact) => ({ ...prevContact, [key]: value }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(contact);
        setContact(initialContact);
      }}
    >
      <label>
        Vorname:{' '}
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Nachname:{' '}
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        E-Mail:{' '}
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">speichern</button>
    </form>
  );
}

export default Form;
