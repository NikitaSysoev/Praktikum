const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const word = input[0].toLowerCase().replace(/[\. ,:-]+/g, '');
const result = word === word.split('').reverse().join('') ? 'True' : 'False';
console.log(result);
