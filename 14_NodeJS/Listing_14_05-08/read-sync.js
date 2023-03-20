const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt');
  console.log(data.toString());
} catch (error) {
  console.error(error);
}
