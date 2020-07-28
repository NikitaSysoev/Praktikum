const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const array = input[1] ? input[1].split(' ').map(Number) : [];

function merge(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    res.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
  }

  return res.concat(arr1.slice(i), arr2.slice(j));
}

function mergeSort(arr) {
  if (!arr || !arr.length) {
    return [];
  }

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(array).join(' '));
