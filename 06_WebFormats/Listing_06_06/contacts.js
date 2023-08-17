const person = {
	"firstname": "John",
	"lastname": "Doe",
	"phone": {
		"type": "cell",
		"number": "01234567"
	},
	"email": "peter.doe@example.com",
	"address": {
		"street": "Sample Street",
		"number": 99,
		"code": "12345",
		"city": "Sample City"
	}
};
console.log(person.firstname); 		// "John"
console.log(person.lastname); 		// "Doe"
console.log(person.phone.type); 	// "cell"
console.log(person.phone.number); 	// "01234567"
console.log(person.email); 			// "john.doe@example.com"
console.log(person.address.street); // "Sample Street"
console.log(person.address.number); // 99
console.log(person.address.code); 	// "12345"
console.log(person.address.city); 	// "Sample City"