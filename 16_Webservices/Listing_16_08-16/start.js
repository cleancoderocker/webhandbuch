const express = require('express');
const ContactsManager = require('./ContactsManager');

const PORT = 8001;
const HOST = 'localhost';

const app = express();
app.use(express.json());

const contactsManager = new ContactsManager();

app.post('/api/contacts', async (request, response) => {
  const contact = request.body;
  const id = await contactsManager.addContact(contact);
  contact.href = `/api/contacts/${id}`;
  response
    .status(201)
    .location(`/api/contacts/${id}`)
    .send(contact);
});
  
app.get('/api/contacts', async (request, response) => {
  const contacts = await contactsManager.getContacts();
  contacts.forEach((contact) => {
    contact.href = `/api/contacts/${contact.id}`;
  });
  response.status(200).send(contacts);
});

app.get('/api/contacts/:id', async (request, response) => {
  const id = parseInt(request.params.id);
  const contact = await contactsManager.getContact(id);
  if (contact) {
    response.status(200).send(contact);
  } else {
    response.status(404).send();
  }
});

app.put('/api/contacts/:id', async (request, response) => {
  const id = parseInt(request.params.id);
  const existingContact = await contactsManager.getContact(id);
  if (existingContact) {
    const contact = request.body;
    await contactsManager.updateContact(id, contact);
    response.status(200).send();
  } else {
    const contact = request.body;
    const id = await contactsManager.addContact(contact);
    response
      .status(201)
      .location(`/api/contacts/${id}`)
      .send();
  }
});

app.delete('/api/contacts/:id', async (request, response) => {
  const id = parseInt(request.params.id);
  await contactsManager.deleteContact(id);
  response.status(200).send();
});

const server = app.listen(PORT, () => {
  console.log(`Webservice läuft unter http://${HOST}:${PORT}`);
});
