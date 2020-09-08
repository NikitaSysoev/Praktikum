const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const res = input[0].split('').reduce(
  (acc, item) => {
    if (acc.prev.includes(item)) {
      acc.set.push(acc.prev.length);
      acc.prev = item;
    } else {
      acc.prev += item;
    }
    return acc;
  },
  { prev: '', set: [] },
);

if (res.set.length) {
  console.log(Math.max.apply(null, res.set));
} else {
  console.log(res.prev.length);
}
