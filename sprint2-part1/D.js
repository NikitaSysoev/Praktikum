const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let capacity = input[0];
const goods = input
  .slice(2)
  .map((arr, index) => arr.split(' ').map(Number).concat(index));

goods.sort((a, b) => {
  if (a[0] > b[0]) return -1;
  if (a[0] < b[0]) return 1;
  if(a[0] === b[0]){
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  }
});

const result = [];

for (let [price, size, index] of goods) {
  if (size <= capacity) {
    result.push(index);
    capacity -= size;
  }
}

console.log(result.join(' '));
