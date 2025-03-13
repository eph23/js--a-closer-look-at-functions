'use strict';

// First-Class Functions
/* NOTE: In JavaScript, functions are first-class citizens, meaning they can be:

✅ Stored in variables, objects, or arrays.
✅ Passed as arguments to other functions.
✅ Returned from other functions.
✅ Assigned to properties of objects.
This makes JavaScript a functional programming language, as functions are treated like any other value.
*/

// Storing a function in a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Passing a function as an argument
function sayHello(callback, name) {
  console.log(callback(name));
}

sayHello(greet, "Eph");  // Output: Hello, Eph!



// Higher-Order Functions (HOFs)
/* NOTE: A higher-order function is a function that either:

✅Takes another function as an argument, or
✅Returns a function as a result.
Since JavaScript supports first-class functions, it enables higher-order functions.
*/
// Taking a Function as an Argument

function double(num) {
  return num * 2;
}

function applyOperation(arr, operation) {
  return arr.map(operation);  // Applies the function to each element
}

console.log(applyOperation([1, 2, 3], double));  // Output: [2, 4, 6]

// Returning a Function
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const triple = multiplier(3);  // Creates a function that triples a number
console.log(triple(5));  // Output: 15
