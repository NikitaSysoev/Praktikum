// obj0 = {
//   value: 5,
//   left: {
//     value: 3,
//     left: {
//       value: 1,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 8,
//     left: null,
//     right: null,
//   },
// };

// obj1 = {
//   value: 5,
//   left: {
//     value: 3,
//     left: {
//       value: 1,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 5,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 8,
//     left: null,
//     right: null,
//   },
// };

function Solution(root) {
  const check = (root, min = -Infinity, max = Infinity) => {
    if (root === null) {
      return true;
    }
    return (
      root.value > min &&
      root.value < max &&
      check(root.left, min, root.value) &&
      check(root.right, root.value, max)
    );
  };
  return check(root) ? 'True' : 'False';
}

// console.log(Solution(obj1));
