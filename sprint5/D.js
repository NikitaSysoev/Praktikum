const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const a = +input[0];
const b = +input[1];

const x = a % b;

const d = 10 * x;

const ost = d % b;



console.log(ost)