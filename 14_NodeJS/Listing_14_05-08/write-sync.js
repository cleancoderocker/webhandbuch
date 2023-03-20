const fs = require('fs');

try {
  fs.writeFileSync('output.txt', 'Hello World');
} catch (error) {
  console.error(erro);
}

try {
  const data = fs.readFileSync('output.txt');
  console.log(data.toString());
} catch (error) {
  console.error(erro);
}
