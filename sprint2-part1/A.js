// const fs = require('fs');
// const os = require('os');
// const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
// });

// let lines = [];

// rl.on('line', (line) => {
//   lines.push(line);
// }).on('close', () => {
//   let lessons = [];
//   for (let i = 1; i < lines.length; i++) {
//     lessons.push(lines[i].split(' ').map(Number));
//   }

//   function sortByTime(arr) {
//     return arr.sort((a, b) => {
//       if (a[1] === b[1]) {
//         return a[0] - b[0];
//       }
//       return a[1] - b[1];
//     });
//   }

//   function removeIntersections(target, array) {
//     const [targetStart, targetEnd] = target;
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//       let [itemStart, itemEnd] = array[i];
//       if (itemEnd <= targetStart || itemStart >= targetEnd) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }

//   const result = [];

//   while (lessons.length) {
//     const sortedByEarlierTime = sortByTime(lessons);
//     const mostEarlierEnding = sortedByEarlierTime.shift();
//     result.push(mostEarlierEnding);
//     lessons = removeIntersections(mostEarlierEnding, sortedByEarlierTime);
//   }

//   console.log(result.length);
//   for (const [start, end] of result) {
//     console.log(start + ' ' + end);
//   }
// });

// let lessons =
//   input[0] > 0 ? input.slice(1).map((str) => str.split(' ').map(Number)) : [];
// const fs = require('fs');
// const os = require('os');
// const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

// let lessons =
//   input[0] > 0 ? input.slice(1).map((str) => str.split(' ').map(Number)) : [];

// let resultArr = [];

// lessons.sort((a, b) => {
//   if (a[1] == b[1]) {
//     return a[0] - b[0];
//   }
//   return a[1] - b[1];
// });

// function getSchedule(lessons) {
//   resultArr.push(lessons[0]);

//   let restLes = [];

//   const maxEnd = resultArr[resultArr.length - 1][1];
//   for (let i = 1; i < lessons.length; ++i) {
//     if (lessons[i][0] >= maxEnd) {
//       restLes.push(lessons[i]);
//     }
//   }

//   if (restLes.length) {
//     getSchedule(restLes);
//   }
// }

// getSchedule(lessons);

// console.log(resultArr.length);
// for (const lesson of resultArr) {
//   console.log(lesson[0] + ' ' + lesson[1]);
// }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
// });

// let lines = [];

// rl.on('line', (line) => {
//   lines.push(line);
// }).on('close', () => {
//   let lessons = [];
//   for (let i = 1; i < lines.length; i++) {
//     lessons.push(lines[i].split(' ').map(Number));
//   }

//   let resultArr = [];

//   lessons.sort((a, b) => {
//     if (a[1] == b[1]) {
//       return a[0] - b[0];
//     }
//     return a[1] - b[1];
//   });

//   function getSchedule(lessons) {
//     resultArr.push(lessons[0]);

//     let restLes = [];

//     const maxEnd = resultArr[resultArr.length - 1][1];
//     for (let i = 1; i < lessons.length; ++i) {
//       if (lessons[i][0] >= maxEnd) {
//         restLes.push(lessons[i]);
//       }
//     }

//     if (restLes.length) {
//       getSchedule(restLes);
//     }
//   }

//   getSchedule(lessons);

//   console.log(resultArr.length);
//   for (const lesson of resultArr) {
//     console.log(lesson[0] + ' ' + lesson[1]);
//   }
// });

const fs = require('fs');
const os = require('os');
const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let lessons = [];
const numLines = Number(lines[0]);
for (let i = 1; i <= numLines; ++i) {
  const pair = lines[i].split(' ');
  lessons.push([Number(pair[0]), Number(pair[1])]);
}
let resultArr = [];

lessons.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

function getSchedule(lessons) {
  resultArr.push(lessons[0]);

  let restLes = [];

  const maxEnd = resultArr[resultArr.length - 1][1];
  for (let i = 1; i < lessons.length; ++i) {
    if (lessons[i][0] >= maxEnd) {
      restLes.push(lessons[i]);
    }
  }

  if (restLes.length) {
    getSchedule(restLes);
  }
}

getSchedule(lessons);

console.log(resultArr.length);
for (const lesson of resultArr) {
  console.log(lesson[0] + ' ' + lesson[1]);
}
