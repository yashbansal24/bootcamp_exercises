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

function prevValue() {
  return this.prevNthValue(1);
}

function prevNthValue(n) {
  return this.nextNthValue(-n);
}

function nextValue() {
  return this.nextNthValue(1);
}

function nextNthValue(n) {
  n = n%this.odometerValues.length;
  this.currentIndex = (this.currentIndex+this.odometerValues.length+n)% this.odometerValues.length;
  this.currentValue = this.odometerValues[this.currentIndex];
  return this.currentValue;
}

function diff(newOdometerValue) {
  let newIndex = this.odometerValues.indexOf(newOdometerValue);
  if(newIndex === -1)
    return false;

  if(this.currentIndex < newIndex)
    return Math.abs(newIndex - this.currentIndex);
  else
    return newIndex + this.odometerValues.length - this.currentIndex;
}

function initOdometer() {
  if(this.odometerValues.length > 0) {
    this.currentValue = this.odometerValues[0];
    this.currentIndex = 0;
  }
}

function readOdometer() {
  return this.currentValue;
}

class Odometer {
  constructor(n) {
    this.odometerValues = genOdometerValues(n);
    this.currentValue = "";
    this.currentIndex = 0;

    this.read = readOdometer;
    this.init = initOdometer;
    this.nextValue = nextValue;
    this.prevValue = prevValue;
    this.nextNthValue = nextNthValue;
    this.prevNthValue = prevNthValue;
    this.diff = diff;
  }
}

module.exports = Odometer;
