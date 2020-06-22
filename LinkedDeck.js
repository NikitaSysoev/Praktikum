class LinkedDeck {
  constructor(maxN) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxN = maxN;
  }
  // push
  push_back(item) {
    if (this.size !== this.maxN) {
      this.size++;
      const last = this.last;
      const element = { prev: last, next: null, item };
      if (last) {
        last.next = element;
        this.last = element;
      } else {
        this.first = element;
        this.last = element;
      }
    } else {
      return 'error';
    }
  }

  // pop
  pop_back() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      this.size--;
      const element = this.last;
      if (!element) return null;
      if (this.first === element) {
        this.first = null;
        this.last = null;
      } else {
        this.last = element.prev;
      }
      return element.item;
    }
  }
  //unshift
  push_front(item) {
    if (this.size !== this.maxN) {
      this.size++;
      const first = this.first;
      const element = { prev: null, next: first, item };
      if (first) {
        first.prev = element;
        this.first = element;
      } else {
        this.first = element;
        this.last = element;
      }
    } else {
      return 'error';
    }
  }
  //shift
  pop_front() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      this.size--;
      const element = this.first;
      if (!element) return null;
      if (this.last === element) {
        this.first = null;
        this.last = null;
      } else {
        this.first = element.next;
      }
      return element.item;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = LinkedDeck;
