const fs = require('fs');

fs.readFile('input.txt', (error, data) => {
  if (error) {
	console.error(error);
	return;
  }
  console.log(data.toString());
});
