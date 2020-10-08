const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const array = input[1].split(' ').map(Number);

const getPosition = (num, place) => {
  const m = '1' + '0'.repeat(place);
  return Math.floor(num / m) % 10;
};

function radixSort(arr) {
  let max = 0;
  for (let x of arr) {
    const str = String(x);
    if (max < str.length) {
      max = str.length;
    }
  }

  for (let i = 0; i < max; i++) {
    const buckets = Array(10)
      .fill()
      .map(() => []);

    for (let j = 0; j < arr.length; j++) {
      const pos = getPosition(arr[j], i);
      buckets[pos].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort(array).join(' '));
