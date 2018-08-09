const Odometer = require('./odometer');

let odometer = new Odometer(3);
odometer.init();

console.log(odometer.read());
console.log(odometer.prevNthValue(85));
console.log(odometer.nextNthValue(6));
console.log(odometer.diff(123));
