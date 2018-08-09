const Odometer = require('./odometer');

let odometer = new Odometer(1);
odometer.init();

console.log(odometer.read());
console.log(odometer.prevNthValue(4));
console.log(odometer.nextNthValue(6));
console.log(odometer.diff(7));
