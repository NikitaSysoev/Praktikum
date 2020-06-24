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
  let current = head;

  while (current.next !== null) {
    current.passed = true;
    current = current.next;

    if (current.passed === true) {
      break;
    }
  }

  return current.passed ? 'True' : 'False';
}
