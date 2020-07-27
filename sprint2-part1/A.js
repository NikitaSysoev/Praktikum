const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let lessons = input.slice(1).map((str) => str.split(' ').map(Number));

let result = [];
let minTime = -1;

lessons.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
});

for (let time of lessons) {
  if (time[0] >= minTime) {
    result.push(time);
    minTime = time[1];
  }
}

console.log(result.length);
for (let [start, end] of result) {
  console.log(start + ' ' + end);
}
