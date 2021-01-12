// Вам даны строки в запакованном виде. Определим запакованную строку (ЗС) рекурсивно. Строка, состоящая только из маленьких латинских букв является ЗС. Если A и B — корректные ЗС, то и AB является ЗС. Если A — ЗС, а n — однозначное натуральное число, то  тоже ЗС. При этом запись  означает, что при распаковке строка A записывается подряд n раз. Найдите наибольший общий префиск распакованных строк и выведите его (в распакованном виде).

// Формат ввода
// В первой строке записано число n (1 ≤ n ≤ 1000) — число строк. Далее в n строках записаны запакованные строки, гарантируется, что эти строки корректны, то есть удовлетворяют указанному рекурсивному определению. Длина строк после распаковки не превосходит 105.

// Формат вывода
// Выведите наибольший общий префикс распакованных строк

// Пример 1
// Ввод	Вывод
// 3
// 2[a]2[ab]
// 3[a]2[r2[t]]
// a2[aa3[b]]
// aaa
// Пример 2
// Ввод	Вывод
// 3
// abacabaca
// 2[abac]a
// 3[aba]

// Примечания;
// Сложение подразумевается как конкатенация двух строк. Умножение строки на число — повтор строки соответствующее число раз. Пусть функция f умеет принимать ЗС и распаковывать ее. Если ЗС D имеет вид D=AB, где A и B тоже ЗС, то f(D) = f(A) + f(B). Если , то f(D) = f(A) × n.

const fs = require('fs');
const os = require('os');
const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function isDigit(char) {
  return Number.isInteger(1 * char);
}

function unpackWord(s) {
  const stack = [];

  for (const char of s) {
    if (char === '[') {
      continue;
    }
    if (char === ']') {
      // while stack items are *not* digits,
      // pop them and store into temporary array in reverse order
      let sequence = [];
      let prevChar = stack.pop();
      while (prevChar !== undefined && !isDigit(prevChar)) {
        sequence.push(prevChar);
        prevChar = stack.pop();
      }
      // Since multiplier can only be one-digit, then we don't need to backtrack further
      const multiplier = prevChar !== undefined ? prevChar : 1;
      stack.push(sequence.reverse().join('').repeat(multiplier));
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

////////////////////////////////////////////////////////////////////////////////
// Controller

const wordNum = Number(lines[0]);
const words = new Array(wordNum);
for (let i = 1; i <= wordNum; i++) {
  const unpacked = unpackWord(lines[i]);
  words[i - 1] = unpacked;
}

let prefix = words.pop();
let usedPrefixLength = prefix.length;

for (const word of words) {
  let i = 0;
  const length = Math.min(prefix.length, word.length);
  for (; i < length; i++) {
    if (word.charAt(i) !== prefix.charAt(i)) {
      break;
    }
  }
  usedPrefixLength = Math.min(usedPrefixLength, i > 0 ? i - 1 : 0);
}

console.log(prefix.substring(0, usedPrefixLength + 1));

// 46479743
