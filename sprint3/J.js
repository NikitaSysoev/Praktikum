const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const array = input[1] ? input[1].split(' ').map(Number) : [];
const prototype = input[3] ? input[3].split(' ').map(Number) : [];

const set = new Set(prototype);

const rest = [];
for (let i = 0; i < array.length; i++) {
  if (!set.has(array[i])) {
    rest.push(array[i]);
    delete array[i];
  }
}
const newArray = array.filter((i) => i != null);

const result = quickSort(newArray, prototype).concat(countingSortForRest(rest));

console.log(result.join(' '));

function quickSort(newArray, prototype) {
  if (prototype.length === 0) {
    return [];
  }

  const [head, ...tail] = prototype;

  const nums = newArray.filter((i) => i === head);

  return nums.concat(quickSort(newArray, tail));
}

function countingSortForRest(array) {
  return array
    .reduce((acc, v) => {
      if (!acc[v]) {
        acc[v] = 0;
      }
      acc[v] = acc[v] + 1;
      return acc;
    }, [])
    .reduce((acc, v, i) => {
      if (v != null) {
        acc = acc.concat(Array(v).fill(i));
      }
      return acc;
    }, []);
}
