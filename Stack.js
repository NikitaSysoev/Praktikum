class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  reverse() {
    this.items.reverse();
  }
}

class StackMax extends Stack {
  constructor() {
    super();
  }

  getMax() {
    if (this.isEmpty()) {
      return 'None';
    }
    return Math.max(...this.items);
  }

  get_max() {
    console.log(this.getMax());
  }

  pop() {
    if (this.isEmpty()) {
      console.log('error');
      return;
    }
    return super.pop();
  }
}

class StackMaxEffective extends Stack {
  constructor() {
    super();
    this.set = new Set();
  }

  getMax() {
    return super.isEmpty() ? 'None' : super.peek().top;
  }

  push(item) {
    const top = super.isEmpty() ? item : Math.max(item, this.getMax());
    super.push(item);
  }

  get_max() {
    console.log(this.getMax());
  }

  pop() {
    if (super.isEmpty()) {
      console.log('error');
    } else {
      return super.pop();
    }
  }
}

class StackSet {
  constructor() {
    this.set = new Set();
  }
  push(item) {
    this.set.add(item);
  }

  pop() {
    if (this.isEmpty()) {
      console.log('error');
      return;
    }

    let i = 0;
    let result = null;
    this.set.forEach((point) => {
      i++;
      if (i === this.size()) {
        result = point;
        this.set.delete(point);
      }
    });
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return 'error';
    }

    let i = 0;
    let result = null;
    this.set.forEach((point) => {
      i++;
      if (i === this.size()) {
        result = point;
      }
    });
    return result;
  }

  size() {
    return this.set.size;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

class QueueX extends Stack {
  constructor() {
    super();
    this.size = 0;
  }

  peek() {
    return this.get_size() ? this.items[this.items.length - 1] : null;
  }

  get_size() {
    return this.size;
  }

  put(value) {
    super.push({ value, prev: this.peek() });
    this.size++;
  }

  get() {
    if (this.get_size() === 0) {
      return 'error';
    }

    let i = this.get_size();
    let current = this.peek();
    let result = null;

    if (i === 1) {
      result = current.value;
      current = null;
    } else {
      while (current.prev.prev !== null) {
        current = current.prev;
      }
      result = current.prev.value;
      current.prev = null;
    }

    this.size--;
    return result;
  }
}

module.exports = { Stack, StackMax, StackMaxEffective, StackSet, QueueX };
