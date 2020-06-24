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
