const ContactsManager = require('../../src/contacts/ContactsManager');
test('addContact() should add a contact', async () => {
  // Setup phase
  const contactsManager = new ContactsManager();
  const contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };
  // Execute phase
  await contactsManager.addContact(contact);
  // Verify phase
  const numberOfContacts = contactsManager._contacts.size;
  expect(numberOfContacts).toBe(1);
  // Teardown phase
});