/*
Кондратий уже сжег все мосты и поменял систему ценностей. Поэтому его теперь интересуют не минимальные, а максимальные остовные деревья. Он поручил вам найти вес такого максимального остовного дерева в неориентированном графе.

Формат ввода
В первой строке дано количество вершин n и ребер m графа (1 ≤ n ≤ 1000, 0 ≤ m ≤ 100000). В каждой из следующих m строк заданы ребра в виде троек чисел u, v, w. u и v — вершины, которые соединяет это ребро. w — его вес ( 1 ≤ u, v ≤ n, 0 ≤ w ≤ 10000). В графе могут быть петли и кратные ребра. Граф может оказаться несвязным.

Формат вывода
Если максимальное остовное дерево существует, то выведите его вес. Иначе (если в графе несколько компонент связности) выведите фразу «Oops! I did it again».

Пример 1
Ввод	Вывод
4 4
1 2 5
1 3 6
2 4 8
3 4 3
19
Пример 2
Ввод	Вывод
3 3
1 2 1
1 2 2
2 3 1
3
Пример 3
Ввод	Вывод
2 0
Oops! I did it again
*/

const fs = require('fs');
const os = require('os');
const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const FAILURE = 'Oops! I did it again';

class Graph {
  constructor(verticesNum) {
    this.verticesNum = verticesNum;
    this.graph = [];
  }

  addEdge(u, v, w) {
    this.graph.push([u, v, w]);
  }

  find(parent, i) {
    if (parent[i] === i) {
      return i;
    }
    return this.find(parent, parent[i]);
  }

  union(parent, rank, x, y) {
    const xroot = this.find(parent, x);
    const yroot = this.find(parent, y);

    if (rank[xroot] < rank[yroot]) {
      parent[xroot] = yroot;
    } else if (rank[xroot] > rank[yroot]) {
      parent[yroot] = xroot;
    } else {
      parent[yroot] = xroot;
      rank[xroot]++;
    }
  }

  kruskal() {
    const result = [];
    let i = 0;
    let e = 0;

    this.graph.sort((a, b) => a[2] - b[2]);

    const parent = [];
    const rank = [];

    for (let node = 0; node < this.verticesNum; node++) {
      parent.push(node);
      rank.push(0);
    }

    while (e < this.verticesNum - 1) {
      const [u, v, w] = this.graph[i];

      i++;
      const x = this.find(parent, u);
      const y = this.find(parent, v);

      if (x !== y) {
        e++;
        result.push([u, v, w]);
        this.union(parent, rank, x, y);
      }
    }

    if (result.length === 0) {
      throw new Error('zero result length');
    }
    let sum = 0;
    for (const triplet of result) {
      const [u, v, weight] = triplet;
      sum += weight;
    }

    return sum;
  }
}

const verticesNum = Number(lines[0].split(' ')[0]);
const edgesNum = Number(lines[0].split(' ')[1]);

if (edgesNum === 0 && verticesNum === 1) {
  console.log(0);
  return;
}
if (edgesNum < verticesNum - 1) {
  console.log(FAILURE);
  return;
}

const graph = new Graph(verticesNum);

for (let i = 0; i < edgesNum; ++i) {
  const [u, v, w] = lines[i + 1].split(' ').map((x) => Number(x));
  graph.addEdge(u - 1, v - 1, -w);
}

try {
  const sum = graph.kruskal();
  console.log(sum < 0 ? -sum : 0);
} catch (e) {
  console.log(FAILURE);
}
// 47153350