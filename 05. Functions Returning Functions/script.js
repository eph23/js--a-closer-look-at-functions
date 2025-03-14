'use strict';

//
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
