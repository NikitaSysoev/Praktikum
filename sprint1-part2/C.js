const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

console.log(new Set(input).size);
