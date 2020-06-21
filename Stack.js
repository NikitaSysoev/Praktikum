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
  }

  getMax() {
    return super.isEmpty() ? 'None' : super.peek().top;
  }

  push(item) {
    const top = super.isEmpty() ? item : Math.max(item, this.getMax());
    super.push({ top, item });
  }

  get_max() {
    console.log(this.getMax());
  }

  pop() {
    if (super.isEmpty()) {
      console.log('error');
    } else {
      return super.pop().item;
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


module.exports = { Stack, StackMax, StackMaxEffective, StackSet };
