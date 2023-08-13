const jsonString = `{
	"firstname": "Max",
	"lastname": "Mustermann",
	"phone": {
	  "type": "mobile",
	  "number": "01234567"
	},
	"email": "max.mustermann@example.com",
	"address": {
	  "street": "Musterstraße",
	  "number": 99,
	  "code": "12345",
	  "city": "Musterstadt"
	}
  }`;  

const person = JSON.parse(jsonString);
console.log(person.firstname);      // "Max"
console.log(person.lastname);       // "Mustermann"
console.log(person.phone.type);     // "mobile"
console.log(person.phone.number);   // "01234567"
console.log(person.email);          // "max.mustermann@example.com"
console.log(person.address.street); // "Musterstraße"
console.log(person.address.number); // 99
console.log(person.address.code);   // "12345"
console.log(person.address.city);   // "Musterstadt"