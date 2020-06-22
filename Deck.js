class Deck {
  constructor(maxN) {
    this.queue = Array(maxN).fill(null);
    this.head = 0;
    this.tail = 0;
    this.length = 0;
    this.maxN = maxN;
  }

  isEmpty() {
    return this.length === 0;
  }

  /// unshoft++
  push_front(item) {
    if (this.length !== this.maxN) {
      this.queue[this.head] = item;

      this.head--;
      if (this.head < 0) {
        this.head = this.maxN - 1;
      }

      this.length++;
    } else {
      return 'error';
    }
  }

  // push+++
  push_back(item) {
    if (this.length !== this.maxN) {
      this.tail++;
      if (this.tail === this.maxN) {
        this.tail = 0;
      }

      this.length++;
      this.queue[this.tail] = item;
    } else {
      return 'error';
    }
  }

  // pop+++
  pop_back() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      const value = this.queue[this.tail];
      this.queue[this.tail] = null;

      this.tail--;
      if (this.tail < 0) {
        this.tail = this.maxN - 1;
      }

      this.length--;
      return value;
    }
  }

  // shift +++
  pop_front() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      this.head++;
      if (this.head === this.maxN) {
        this.head = 0;
      }

      this.length--;
      const value = this.queue[this.head];
      this.queue[this.head] = null;
      return value;
    }
  }
}

module.exports = Deck;
