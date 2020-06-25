const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

Number.prototype.logx = function (x) {
  return Math.log(this) / Math.log(x);
};

const num = Number(input[0]).logx(4);
const result = Number.isInteger(num) ? 'True' : 'False';

console.log(result);
