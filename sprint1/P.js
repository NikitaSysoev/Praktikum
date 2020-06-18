const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(P(line));
  rl.close();
});

const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function P(line) {
  const arr = [...line].map((item) => [...map[item]]);
  const res = arr.reduce((total, str) => {
    return total.concat(combinate(total, str));
  }, []);
  return res.filter((i) => i.length > line.length - 1).join(' ');
}

function combinate(arr1, arr2) {
  const result = [];
  if (arr1.length === 0 || arr2.length === 0) {
    return arr1.concat(arr2);
  }
  for (let x of arr1) {
    for (let y of arr2) {
      result.push(x + y);
    }
  }
  return result;
}
