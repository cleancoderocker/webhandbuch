const ContactsManager = require('../../src/contacts/ContactsManager');

test('addContact() should add a contact', async () => {
  // Setup-Phase
  const contactsManager = new ContactsManager();
  const contact = {
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max.mustermann@example.com',
  };

  // Execute-Phase
  await contactsManager.addContact(contact);

  // Verify-Phase
  const numberOfContacts = contactsManager._contacts.size;
  expect(numberOfContacts).toBe(1);

  // Teardown-Phase
});
