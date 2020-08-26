const vasya_butylkin_optional_courses = [
  'вышивание крестиком',
  'рисование мелками на парте',
  'настольный керлинг',
];
const vasilisa_chashkina_optional_courses = [
  'настольный керлинг',
  'кухня африканского племени ужасмай',
  'тяжелая атлетика',
  'таракановедение',
];

const list = [];

list.push(...vasilisa_chashkina_optional_courses);
list.push(...vasya_butylkin_optional_courses);

// Нужно пройтись по каждому элементу массива,
// то есть сделать n итераций. На каждой итерации будет проверка,
// равно ли значение текущего элемента какому-то из элементов
// массива unique_courses. На это потребуется O(n) операций.
// То есть на самом деле сложность алгоритма будет O(n²).
const unique = [];
for (let l of list) {
  if (!unique.includes(l)) {
    unique.push(l);
  }
}

// Сложность алгоритма зависит от реализации множества в определённом языке программирования.
// Допустим, используется Python. Всего будет n итераций. На каждой итерации нужно проверить,
// есть ли текущий элемент во множестве visited_optional_courses. Проверка выполняется за O(1),
// как и добавление элемента во множество.
// Почему так, вы узнаете, когда познакомитесь с хеш-таблицами.
// Итого n итераций, на каждой из которых производим O(1) операций. Сложность алгоритма O(n).
const set = new Set();
for (let l of list) {
  set.add(l);
}

// console.log(set);

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  static insertNode(node, index, value) {
    const head = node;
    let newNode = new LinkedListNode(value);
    if (index === 0) {
      newNode.next = node;
      return newNode;
    }

    while (index - 1 > 0) {
      node = node.next;
      index--;
    }

    let tmp = node.next;
    node.next = newNode;
    newNode.next = tmp;

    return head;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

const n3 = new LinkedListNode('third');
const n2 = new LinkedListNode('second', n3);
const n1 = new LinkedListNode('first', n2);

// n1  n1.next ---> newN  newN.next ----> n2   n2.next ----> n3   n3.next ----> null

let head = LinkedListNode.insertNode(n1, 2, '2.5');

// console.log(head.next.next);

const states_needed = new Set(['mt', 'wa', 'or', 'tg', 'nv', 'ut', 'lp', 'az']);
const stations = {};
stations['kone'] = new Set(['tg', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'tg', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'lp']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['lp', 'az']);
const final_stations = new Set();

let best_station = null;
let states_covered = new Set();

let n = 0;
Object.entries(stations).forEach(([name, set]) => {
  if (set.size > n) {
    n = set.size;
    best_station = name;
  }
});

// console.log(best_station)

function noticeIndex(arr) {
  arr.sort().reverse();
  let index = 0;
  for (let i of arr) {
    if (i > index) {
      index++;
    } else {
      break;
    }
  }
  return index;
}

console.log(noticeIndex([3, 0, 4, 1, 5]));
