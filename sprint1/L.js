const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

let [w1, w2] = input;
w1 = w1.slice(0, w1.length - 1);

const max = w1.length > w2.length ? w1 : w2;
const etalon = w1.length > w2.length ? w2 : w1;

let result = '';

for (let i = 0; i < max.length; i++) {
  const newWord = max.slice(0, i) + max.slice(i + 1);
  if (G(newWord, etalon) === true) {
    result = max[i];
  }
}


function G(word1, word2) {
  const w1 = [...word1.toLowerCase()].sort().join('');
  const w2 = [...word2.toLowerCase()].sort().join('');
  return w1 === w2;
}

console.log(result)
