import { createContext, useState } from 'react';

export const ContactContext = createContext(null);

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState([]);

  return <ContactContext.Provider value={[contacts, setContacts]} {...props} />;
};
