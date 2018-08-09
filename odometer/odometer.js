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
  n = n%this.odometerValues.length;
  let position = this.odometerValues.indexOf(this.currentValue);
  this.currentValue = this.odometerValues[
    (position+this.odometerValues.length-n)%this.odometerValues.length];
  return this.currentValue;
}

function nextValue() {
  return this.nextNthValue(1);
}

function nextNthValue(n) {
  n = n%this.odometerValues.length;
  let position = this.odometerValues.indexOf(this.currentValue);
  this.currentValue = this.odometerValues[(position+n)% this.odometerValues.length];
  return this.currentValue;
}

function diff(newOdometerValue) {
  if(this.odometerValues.indexOf(newOdometerValue) === -1)
    return false;

  if(this.odometerValues.indexOf(this.currentValue) < this.odometerValues.indexOf(newOdometerValue))
    return Math.abs(this.odometerValues.indexOf(newOdometerValue) - this.odometerValues.indexOf(this.currentValue));
  else
    return this.odometerValues.indexOf(newOdometerValue) + this.odometerValues.length - this.odometerValues.indexOf(this.currentValue);
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
    this.currentValue = "";

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
