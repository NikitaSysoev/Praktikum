const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const list = input.slice(1);
const set = new Set(list);
for (let item of set.values()) console.log(item);
