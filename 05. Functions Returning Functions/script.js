'use strict';

//
/* NOTE: In JavaScript, a function can return another function. This means that calling the outer function will return an inner function that can be assigned to a variable or invoked later. This technique is commonly used in closures, functional programming, and higher-order functions.
 */
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Eph');
greeterHey('Steven');

greet('Hello')('Eph');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('EphS');
