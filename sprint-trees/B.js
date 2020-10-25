// obj0 = {
//   value: 1,
//   left: null,
//   right: {
//     value: 0,
//     left: null,
//     right: null,
//   },
// };

// obj1 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 0,
//     left: null,
//     right: null,
//   },
// };

// obj2 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 0,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 6,
//       left: null,
//       right: null,
//     },
//   },
// };

// obj3 = {
//   value: 0,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 7,
//     left: {
//       value: 4,
//       left: {
//         value: 12,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       value: 8,
//       left: null,
//       right: null,
//     },
//   },
// };

function Solution(node) {
  function checkHeight(node) {
    if (node === null) {
      return 0;
    }
    let leftHeight = checkHeight(node.left);
    let rightHeight = checkHeight(node.right);
    let diff = leftHeight - rightHeight;
    if (Math.abs(diff) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  function isBalanced(node) {
    if (node === null) {
      return true;
    }
    if (checkHeight(node) === -1) {
      return false;
    } else {
      return isBalanced(node.left) && isBalanced(node.right);
    }
  }

  if (isBalanced(node)) {
    return 'True';
  } else {
    return 'False';
  }
}
