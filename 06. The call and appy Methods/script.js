'use strict';

// The call Method
/* NOTE: The call() method in JavaScript is a built-in function that allows you to invoke a function with a specific this value and individual arguments, rather than passing an array of arguments like with apply(). It provides a way to set the context (this) of the function explicitly, enabling you to borrow methods from one object and apply them to another.
 */

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Ephraim S');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// book(23, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams');
book.call(eurowings, 23, 'John Smith');

console.log(eurowings.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
book.call(swiss, 583, 'John Cooper');

console.log(swiss.bookings);

// Apply method
/* NOTE: The apply() method in JavaScript is a built-in function that allows you to invoke a function with a specific this value and an array (or array-like object) of arguments. It's similar to the call() method, but instead of passing arguments individually, apply() takes an array (or an array-like object) of arguments.
 */

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss.bookings);

book.call(swiss, ...flightData);
