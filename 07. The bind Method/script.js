'use strict';

// The call Method
/* NOTE: The bind() method in JavaScript creates a new function that, when called, has its this keyword permanently set to a specified value. Unlike call() and apply(), bind() does not immediately execute the function; instead, it returns a new function that can be called later.
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

// Call method
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

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss.bookings);

book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Eph');
bookEW23('Martha Cooper');

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTaxRate = function (taxRate) {
  return function (value) {
    return value + value * taxRate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
