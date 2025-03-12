'use strict';

// Default Parameters
/* NOTE: Default parameters in JavaScript allow you to set default values for function parameters if no argument is provided or if the argument is undefined. This feature helps prevent errors when a function is called without a certain parameter or with an undefined value.
 */

const bookings = [];
const creteBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

creteBooking('LH123');
creteBooking('LH123', 2, 800);
creteBooking('LH123', 5);
creteBooking('LH123', undefined, 1200);
