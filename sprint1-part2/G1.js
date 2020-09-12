// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const sleep = new Node('sleep', null);
// const eat = new Node('eat', sleep);
// const awake = new Node('awake', eat);

function solution(head, value) {
  let curr = head;
  let x = 0;

  while (curr.value !== value) {
    if (curr.next === null) {
      return -1;
    }
    x++;
    curr = curr.next;
  }

  return x;
}

// const d = new Node('fuck', null)

// console.log(solution(awake, 'awakes'));
