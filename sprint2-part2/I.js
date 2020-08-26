const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const winners = Number(input[0]);
let nums = input[2].split(' ').map(Number);




const sum = (arr) => arr.reduce((acc, item) => acc + item, 0);

// if(sum % winners !== 0){
//     console.log('False')
//     return;
// }

const priz = sum / winners;

nums = nums.sort((a,b)=>{
    if(a>b){
        return -1;
    }
    if(a<b){
        return 1;
    }
    return 0;
});

const result = [...nums];

for(let i=0; i<nums.length; i++){
    if(nums[i] === priz && sum(nums.slice(1)) % winners ===0){
        
    }
}
