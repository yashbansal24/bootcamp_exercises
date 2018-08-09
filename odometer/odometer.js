function genOdometerValues(n) {
  if(n <= 0 || n > 9)
    return [];
  if(n === 1)
    return [1,2,3,4,5,6,7,8,9];

  let prevValues = genOdometerValues(n-1);
  let odometerValues = [];
  for(let num of prevValues) {
    for(let i=(num%10)+1;i<=9;++i)
      odometerValues.push(num*10+i);
  }
  return odometerValues;
}

function initOdometer() {
  if(this.odometerValues.length > 0)
    this.currentValue = this.odometerValues[0];
}

function readOdometer() {
  return this.currentValue;
}

class Odometer {
  constructor(n) {
    this.odometerValues = genOdometerValues(n);
    this.currentValue = 0;

    this.read = readOdometer;
    this.init = initOdometer;
    // this.nextValue = nextValue;
    // this.prevValue = prevValue;
    // this.nextNthValue = nextNthValue;
    // this.prevNthValue = prevNthValue;
    // this.diff = diff;
  }
}

module.exports = Odometer;
