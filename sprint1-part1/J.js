const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const people = input[1].split(' ').map(Number);
const map = new Map();

for (let x of people) {
  map.has(x) ? map.delete(x) : map.set(x, x);
}

const result = [...map.values()][0];
console.log(result);
