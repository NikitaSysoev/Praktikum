const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8');

const array = lines.split(' ');

console.log(array[array.length - 1].length);
