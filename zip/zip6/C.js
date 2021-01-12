const fs = require('fs');
const os = require('os');
const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function isDigit(char) {
  return Number.isInteger(1 * char);
}

function unpackWord(s) {
  const stack = [];

  for (const char of s) {
    if (char === '[') {
      continue;
    }
    if (char === ']') {
      // while stack items are *not* digits,
      // pop them and store into temporary array in reverse order
      let sequence = [];
      let prevChar = stack.pop();
      while (prevChar !== undefined && !isDigit(prevChar)) {
        sequence.push(prevChar);
        prevChar = stack.pop();
      }
      // Since multiplier can only be one-digit, then we don't need to backtrack further
      const multiplier = prevChar !== undefined ? prevChar : 1;
      stack.push(sequence.reverse().join('').repeat(multiplier));
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

////////////////////////////////////////////////////////////////////////////////
// Controller

const wordNum = Number(lines[0]);
const words = new Array(wordNum);
for (let i = 1; i <= wordNum; i++) {
  const unpacked = unpackWord(lines[i]);
  words[i - 1] = unpacked;
}

let prefix = words.pop();
let usedPrefixLength = prefix.length;

for (const word of words) {
  let i = 0;
  const length = Math.min(prefix.length, word.length);
  for (; i < length; i++) {
    if (word.charAt(i) !== prefix.charAt(i)) {
      break;
    }
  }
  usedPrefixLength = Math.min(usedPrefixLength, i > 0 ? i - 1 : 0);
}

console.log(prefix.substring(0, usedPrefixLength + 1));

// 46479743
