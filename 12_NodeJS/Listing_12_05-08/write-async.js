const fs = require('fs');

fs.writeFile('output.txt', 'Hello World', (error) => {
  if (error) {
    return console.error(error);
  }
  fs.readFile('output.txt', (error, data) => {
    if (error) {
      return console.error(error);
    }
    console.log(data.toString());
  });
});
