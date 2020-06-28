class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  link(node) {
    this.next = node;
  }
}

const monday = new Node('monday');
const tuesday = new Node('tuesday');
const wednesday = new Node('wednesday');
const thursday = new Node('thursday');
const friday = new Node('friday');
const saturday = new Node('saturday');
const sunday = new Node('sunday');

monday.link(tuesday);
tuesday.link(wednesday);
wednesday.link(thursday);
thursday.link(friday);
friday.link(saturday);
saturday.link(sunday);
// sunday.link(monday);

// monday.link(monday)
// friday.link(friday);
// saturday.link(friday)
// friday.link(monday);

console.log(hasCycle(monday));

function hasCycle(head) {
  while (head.next !== null) {
    head.passed = true;
    head = head.next;

    if (head.passed === true) {
      break;
    }
  }

  return head.passed ? 'True' : 'False';
}
