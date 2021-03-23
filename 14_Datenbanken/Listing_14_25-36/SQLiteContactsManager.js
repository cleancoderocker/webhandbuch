const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("contacts.db");

module.exports = class SQLiteContactsManager {
  constructor() {
    this.init();
  }

  init() {
    db.run(`
		  CREATE TABLE IF NOT EXISTS 
			contacts (
			  id INTEGER PRIMARY KEY AUTOINCREMENT, 
			  firstName TEXT, 
			  lastName TEXT, 
			  email TEXT
			)`);
  }

  async addContact(contact) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT
          INTO contacts (firstName, lastName, email)
          VALUES (?, ?, ?)`,
        [contact.firstName, contact.lastName, contact.email],
        function() {
          resolve(this.lastID);
        }
      );
    });
  }

  async getContact(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM contacts WHERE id = ?", [id], (error, row) => {
        if (error) {
          reject(error);
        } else {
          resolve(row);
        }
      });
    });
  }

  async updateContact(id, contact) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE contacts SET 
          firstName = ?, 
          lastName = ?, 
          email = ? 
        WHERE id = ?`,
        [contact.firstName, contact.lastName, contact.email, id],
        (error, row) => {
          if (error) {
            reject(error);
          } else {
            resolve(row);
          }
        }
      );
    });
  }

  async deleteContact(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM contacts WHERE id = ?", [id], (error, row) => {
        if (error) {
          reject(error);
        } else {
          resolve(row);
        }
      });
    });
  }

  async getContacts() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM contacts", [], (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }
};
