class Deck {
  constructor(maxN) {
    this.queue = Array(maxN).fill(null);
    this.head = 0;
    this.tail = 1;
    this.length = 0;
    this.maxN = maxN;
  }

  isEmpty() {
    return this.length === 0;
  }

  /// unshoft
  push_front(item) {
    if (this.length !== this.maxN) {
      this.length++;
      this.head = (this.head + 1) % this.maxN;
      this.queue[this.head] = item;
    } else {
      return 'error';
    }
  }

  // shift
  pop_front() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      this.length--;
      const value = this.queue[this.head];
      this.queue[this.head] = null;
      this.head = (this.head || this.maxN) - 1;
      return value;
    }
  }

  // push
  push_back(item) {
    if (this.length !== this.maxN) {
      this.length++;
      this.tail = (this.tail || this.maxN) - 1;
      this.queue[this.tail] = item;
    } else {
      return 'error';
    }
  }

  // pop
  pop_back() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      this.length--;
      const value = this.queue[this.tail];
      this.queue[this.tail] = null;
      this.tail = (this.tail + 1) % this.maxN;
      return value;
    }
  }
}

module.exports = Deck;
