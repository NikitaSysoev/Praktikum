// const tree1 = {
//   value: 1,
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
// };

// const tree2 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

// const tree3 = {
//   value: 1,
//   left: {
//     value: 3,
//     left: null,
//     right: null,
//   },
//   right: null,
// };

// const tree4 = {
//   value: 1,
//   left: null,
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

function Solution(node1, node2) {
  function calc(node1, node2) {
    if (node1 === node2) return true;
    if (node1 === null) return false;
    if (node2 === null) return false;

    if (node1.value !== node2.value) {
      return false;
    }

    if (!calc(node1.left, node2.left)) return false;
    if (!calc(node1.right, node2.right)) return false;

    return true;
  }
  return calc(node1, node2) ? 'True' : 'False';
}

// console.log(Solution(tree1, tree2));
