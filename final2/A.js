const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const n = Number(input[0]);
const vm = input[1] ? input[1].split(' ').map(Number) : [];

const sum = vm.reduce((acc, item) => acc + item, 0);
console.log(Math.floor(sum / 2));
