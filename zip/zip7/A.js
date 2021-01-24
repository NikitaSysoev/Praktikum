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
