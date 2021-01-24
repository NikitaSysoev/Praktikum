/*
В стране X есть n городов, которым присвоены номера от 1 до n. Столица страны имеет номер n. Между городами проложены железные дороги. Однако дороги могут быть двух типов по ширине полотна. Любой поезд может ездить только по одному типу полотна. Условно один тип дорог помечают как R, их строил король Ричардус, а другой как B, их строил его сын Барталамеус. То есть если маршрут от одного города до другого имеет как дороги типа R, так и дороги типа B, то ни один поезд не сможет по этому маршруту проехать. От одного города до другого можно проехать только по маршруту, состоящему исключительно из дорог типа R или только из дорог типа B.

Дороги страны X обладают еще и той особенностью, что по ним можно двигаться лишь от города с меньшим номером к городу с бОльшим номером. Это объясняет большой приток жителей в столицу, у которой номер n.

Карта железных дорог называется оптимальной, если не существует пары городов A и B такой, что от A до B можно добраться как по дорогам типа R, так и по дорогам типа B. Иными словами, для любой пары городов верно, что от города с меньшим номером до города с бОльшим номером можно добраться по дорогам только какого-то одного типа или же что маршрут построить вообще нельзя. Выясните, является ли данная вам карта оптимальной.

Формат ввода
В первой строке дано число n (1 ≤ n ≤ 5000) — количество городов в стране. Далее задана карта железных дорог в следующей формате.

Карта задана n-1 строкой. В i-й строке описаны дороги из города i в города i+1, i+2, ..., n. В строке записано n - i символов, каждый из которых либо R, либо B. Если j-й символ строки i равен «B», то из города i в город i + j идет дорога типа «B». Аналогично для типа «R».

Формат вывода
Выведите «YES», если карта оптимальна, и «NO» в противном случае.

Пример 1
Ввод	Вывод
3
RB
R
NO
Пример 2
Ввод	Вывод
4
BBB
RB
B
YES
Пример 3
Ввод	Вывод
5
RRRB
BRR
BR
R
NO
*/

const fs = require('fs');
const os = require('os');
const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

class Graph {
  constructor(verticesNum) {
    this.verticesNum = verticesNum;
    this.adj = new Array(verticesNum);
    for (let i = 0; i < verticesNum; ++i) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  isCyclicUtil(v, visited, stack) {
    if (visited[v] === false) {
      visited[v] = true;
      stack[v] = true;

      for (const n of this.adj[v]) {
        if ((!visited[n] && this.isCyclicUtil(n, visited, stack)) || stack[n]) {
          return true;
        }
      }
    }
    stack[v] = false;
    return false;
  }

  isCyclic() {
    const visited = new Array(this.verticesNum).fill(false);
    const stack = new Array(this.verticesNum).fill(false);

    for (let i = 0; i < this.verticesNum; ++i) {
      if (this.isCyclicUtil(i, visited, stack)) {
        return true;
      }
    }

    return false;
  }
}

const numCities = Number(lines[0]);
const graph = new Graph(numCities);

for (let source = 0; source < numCities - 1; ++source) {
  const line = lines[source + 1];
  const numTypes = numCities - source - 1;

  for (let j = 0; j < numTypes; ++j) {
    const roadType = line.charAt(j);
    const destination = source + j + 1;

    if (roadType === 'R') {
      graph.addEdge(source, destination);
    } else {
      graph.addEdge(destination, source);
    }
  }
}

console.log(graph.isCyclic() ? 'NO' : 'YES');
// 47153011
