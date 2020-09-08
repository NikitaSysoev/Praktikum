// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const sleep = new Node('sleep', null);
// const eat = new Node('eat', sleep);
// const awake = new Node('awake', eat);

function Solution(head) {
  let curr = head;
  while (curr.next !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
  console.log(curr.value);
}

// Solution(awake);
