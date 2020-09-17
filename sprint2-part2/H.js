const fs = require('fs');
const os = require('os');
const [input] = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function insertInside(str, leftIndex) {
  const left = str.substring(0, leftIndex + 1);
  const right = str.substring(leftIndex + 1, str.length);
  return left + '()' + right;
}

function Generate(input) {
  const set = new Set();
  if (input === 0) {
    set.add('');
  } else {
    const prevSet = Generate(input - 1);
    prevSet.forEach((str) => {
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '(') {
          const s = insertInside(str, i);
          set.add(s);
        }
      }
      set.add('()' + str);
    });
  }
  return set;
}

const result = [...Generate(+input)].sort();

for (let res of result) {
  console.log(res);
}
