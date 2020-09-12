const os = require('os');

function solution(head) {
  let curr = head;
  const result = [];
  while (curr.next !== null) {
    result.push(curr.value);
    curr = curr.next;
  }
  result.push(curr.value);
  console.log(result.join(os.EOL));
}

// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const sleep = new Node('sleep', null);
// const eat = new Node('eat', sleep);
// const awake = new Node('awake', eat);

// solution(awake);
