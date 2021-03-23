const ContactsManager = require('./SQLiteContactsManager');

const contactsManager = new ContactsManager();

(async () => {
	const id = await contactsManager.addContact({
		firstName: 'Max',
		lastName: 'Mustermann',
		email: 'maxmustermann@example.com'
	})
	console.log('id');
	console.log(id);
	const contact = await contactsManager.getContacts(id);
	console.log('contact');
	console.log(contact);
	const contacts = await contactsManager.getContacts();
	console.log('contacts');
	console.log(contacts);
})()