const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const list1 = input[2] ? input[2].split(' ').map(Number) : [];
const list2 = input[3] ? input[3].split(' ').map(Number) : [];

const res = [];
list1.forEach((item) => {
  const index = list2.indexOf(item);
  if (index > -1) {
    list2.splice(index, 1);
    res.push(item);
  }
});

console.log(res.join(' '));
