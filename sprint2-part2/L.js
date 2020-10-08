const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const m = Number(input[0]);
const n = Number(input[1]);
const coins = input[2].split(' ').map(Number);

const sum = coins.reduce((acc, item) => acc + item, 0);

if (sum < m) {
  console.log(0);
  return;
}

const combos = [];

function search(remain, stack=[]){
    
}