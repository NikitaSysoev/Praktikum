const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const list1 = input[2] ? input[2].split(' ').map(Number) : [];
const list2 = input[3] ? input[3].split(' ').map(Number) : [];

const set1 = new Set(list1);
const set2 = new Set(list2);

set1.forEach((item) => {
  if (!set2.has(item)) {
    set1.delete(item);
  }
});

console.log([...set1].join(' '));
