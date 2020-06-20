class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(value) {
    const node = new LinkedListNode(value);

    if (this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  addNodeToHead(value) {
    const node = new LinkedListNode(value);

    if (this.length) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  deleteNode(index) {
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let prev = null;

      while (current !== null && index > 0) {
        prev = current;
        current = current.next;
        index--;
      }

      if (current !== null) {
        prev.next = current.next;
        if (current.next) {
          current.next.prev = prev;
        }
      }
    }

    this.length--;
    return this.head;
  }

  findItemIndex(value) {
    let i = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }

    return -1;
  }

  logLinkedList() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    for (let value of nodes) {
      console.log(value);
    }
  }
}

module.exports = LinkedList;
