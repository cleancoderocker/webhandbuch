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
        First name:
        <input 
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange} 
        />
      </label>
      <label>
        Last name:
        <input
          type="text" 
          name="lastName"
          value={contact.lastName}
          onChange={handleChange} 
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={handleChange} 
        />
      </label>
      <button type="submit">write</button>
    </form>
  );
}

export default Form;
