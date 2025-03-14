'use strict';

// Callback function
/* NOTE: In JavaScript, a callback function is a function that is passed as an argument to another function, and is intended to be executed later, typically when some task is complete or an event is triggered.

When a function accepts a callback, it means that the function takes another function as an argument and executes it at some point during its execution. This allows for asynchronous behavior, custom actions, and flexibility in code.
 */
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Callback function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher level function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🙋‍♀️');
};
document.body.addEventListener('click', high5);
