'use strict';

// How Passing Arguments Works: Value vs Reference
/* NOTE: When you pass arguments to a function in JavaScript, the way the data is passed can either be by value or by reference.

Pass by value means that the function gets a copy of the data, so any changes made inside the function do not affect the original data outside the function.
Pass by reference means that the function gets a reference to the original data, so changes made inside the function will directly affect the original data.
 */

const flight = 'LH234';
const eph = {
  name: 'Ephraim S',
  passport: 213546879,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 213546879) {
    // alert('Check in');
    console.log('Check in');
  } else {
    // alert('Wrong Passport');
    console.log('Wrong Passport');
  }
};

checkIn(flight, eph);
console.log(flight);
console.log(eph);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(eph);
checkIn(flight, eph);
console.log(eph);
