const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let lessons =
  input[0] > 0 ? input.slice(1).map((str) => str.split(' ').map(Number)) : [];

const result = [];

while (lessons.length) {
  const sortedByEarlierTime = sortByTime(lessons);
  const mostEarlierEnding = sortedByEarlierTime.shift();
  result.push(mostEarlierEnding);
  lessons = removeIntersections(mostEarlierEnding, sortedByEarlierTime);
}

console.log(result.length);
for (const [start, end] of result) {
  console.log(start + ' ' + end);
}

function sortByTime(arr) {
  return arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
}

function removeIntersections(target, array) {
  const [targetStart, targetEnd] = target;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let [itemStart, itemEnd] = array[i];
    if (itemEnd <= targetStart || itemStart >= targetEnd) {
      result.push(array[i]);
    }
  }
  return result;
}
