// class Node {
//   constructor(value = null, next = null, prev = null) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// const sleep = new Node('sleep');
// const eat = new Node('eat');
// const awake = new Node('awake');

// awake.prev = null;
// awake.next = eat;
// eat.prev = awake;
// eat.next = sleep;
// sleep.prev = eat;
// sleep.next = null;

function solution(head) {
  let curr = head;
  while (curr.next !== null) {
    let next = curr.next;
    let prev = curr.prev;
    curr.next = prev;
    curr.prev = next;
    curr = next;
  }
  curr.next = curr.prev;
  curr.prev = null;
  return curr;
}

// console.log(solution(awake));
