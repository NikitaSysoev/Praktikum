const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const n = Number(input[0]);
const greed = input[1].split(' ').map(Number);
const m = Number(input[2]);
const sizes = input[3].split(' ').map(Number);