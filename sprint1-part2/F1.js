// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const sleep = new Node('sleep', null);
// const eat = new Node('eat', sleep);
// const awake = new Node('awake', eat);

function solution(head, index) {
  let curr = head;
  let x = 0;
  if (index === 0) {
    curr = head.next;
    head.next = null;
    return curr;
  } else {
    while (x !== index - 1) {
      x++;
      curr = curr.next;
    }
    if (x === index - 1) {
      curr.next = curr.next.next;
      return head;
    }
  }
}

// console.log(solution(awake, 0))
