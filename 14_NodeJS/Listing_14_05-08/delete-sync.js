const fs = require('fs');

try {
  fs.writeFileSync('output.txt', 'Hello World');
  console.log('Datei erstellt');
} catch (error) {
  console.error(erro);
}

try {
  fs.unlinkSync('output.txt');
  console.log('Datei wieder gelöscht');
} catch (error) {
  console.error(erro);
}
