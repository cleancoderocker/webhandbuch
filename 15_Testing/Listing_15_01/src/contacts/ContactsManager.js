module.exports = class ContactsManager {
  constructor() {
    this._contacts = new Map();
    this._idCounter = 0;
  }

  async addContact(contact) {
    this._idCounter++;
    contact.id = this._idCounter;
    this._contacts.set(this._idCounter, contact);
    return this._idCounter;
  }

  async getContact(id) {
    return this._contacts.get(id);
  }

  async updateContact(id, contact) {
    this._contacts.set(id, contact);
  }

  async deleteContact(id) {
    this._contacts.delete(id);
  }

  async getContacts() {
    return Array.from(this._contacts.values());
  }
}