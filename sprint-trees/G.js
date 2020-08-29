const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);
const k = Number(input[4]);