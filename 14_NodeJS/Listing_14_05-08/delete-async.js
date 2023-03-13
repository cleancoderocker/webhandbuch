const fs = require('fs');

fs.writeFile('output.txt', 'Hello World', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('Datei erstellt');
  fs.unlink('output.txt', (error) => {
    if (error) {
      return console.error(error);
    }
    console.log('Datei wieder gelöscht');
  });
});
