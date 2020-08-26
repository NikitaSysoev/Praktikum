class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  sortList(head) {
    if (!head) {
      return null;
    }

    let length = 1;
    let node = head;
    let tail = null;
    while (node.next !== null) {
      node = node.next;
      length++;
    }
    tail = node;
    return this.merge_sort(head, tail, length);
  }

  merge_sort(head, tail, length) {
    if (head === tail) {
      head.next = null;
      return head;
    }

    if (head.next === tail) {
      if (head.value < tail.value) {
        tail.next = null;
        return head;
      }
      head.next = null;
      tail.next = head;
      return tail;
    }

    let i = 1;
    let node = head;
    while (i < length / 2) {
      node = node.next;
      i++;
    }

    let length1 = (length2 = length / 2);

    if (length % 2) {
      length2++;
    }

    let tail1 = node;
    let head2 = node.next;

    let left_part = this.merge_sort(head, tail1, length1);
    let right_part = this.merge_sort(head2, tail, length2);
    return this.merge(left_part, right_part);
  }

  merge(head1, head2) {
    let cur, tmp, other;
    if (head1.value < head2.value) {
      cur = head1;
      tmp = head1.next;
      other = head2;
    } else {
      cur = head2;
      tmp = head2.next;
      other = head1;
    }

    let mergedList = cur;

    if (!tmp) {
      cur.next = other;
      return mergedList;
    }

    while (tmp) {
      if (tmp.value < other.value) {
        cur = tmp;
        tmp = tmp.next;
      } else {
        cur.next = other;
        cur = other;
        other = tmp;
        tmp = cur.next;
      }
    }
    cur.next = other;
    return mergedList;
  }
}
