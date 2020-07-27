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
