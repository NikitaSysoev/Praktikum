const readline = require('readline');
const { Stack } = require('../Stack');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  L(line);
  rl.close();
});

// Использование стека позволяет улучшить этот алгоритм — встреченная закрывающая скобка должна быть парной к последней встреченной открывающей, после чего их необходимо удалить
// Для хранения открывающих скобок будем использовать стек.
// Пройдем по строке от начала до конца. Если очередной символ — открывающая скобка, то добавляем ее в стек.
// Если закрывающая — то проверяем, что стек не пуст и скобка на вершине стека парная к данной закрывающей.
// При соблюдении условий открывающая скобка удаляется из стека, иначе алгоритм заканчивает свою работу (последовательность неправильная).

// После окончания работы алгоритма стек должен остаться пустым.
// Если стек не пуст — это означает, что некоторые открывающие скобки не были закрыты,
// то есть последовательность не является правильной.

function L(line) {
  if (line === '') {
    console.log('True');
    return;
  }
  const stack = new Stack();

  const config = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (let s of line) {
    if (s in config) {
      stack.push(config[s]);
    } else {
      if (stack.isEmpty()) {
        console.log('False');
        return;
      }
      if (stack.peek() === s) {
        stack.pop();
      } else {
        console.log('False');
        return;
      }
    }
  }

  if (stack.isEmpty()) {
    console.log('True');
  } else {
    console.log('False');
  }
}
