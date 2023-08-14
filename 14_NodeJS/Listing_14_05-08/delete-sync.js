const fs = require('fs');

try {
  fs.writeFileSync('output.txt', 'Hello World');
  console.log('File created');
} catch (error) {
  console.error(erro);
}

try {
  fs.unlinkSync('output.txt');
  console.log('File deleted again');
} catch (error) {
  console.error(erro);
}
