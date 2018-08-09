function genOdometerValues(n) {
  if(n <= 0 || n > 9)
    return [];
  if(n === 1)
    return [1,2,3,4,5,6,7,8,9];
  let tmpList = genOdometerValues(n-1);
  let res = [];
  for(let num of tmpList) {
    for(let i=(num%10)+1;i<=9;++i)
      res.push(num*10+i);
  }
  return res;
}

function initOdometer() {
  if(this.odometerValues.length > 0)
    this.currentValue = this.odometerValues[0];
}

class Odometer {
  constructor(n) {
    this.odometerValues = genOdometerValues(n);
    this.currentValue = 0;

    this.nextValue = nextValue;
    this.prevValue = prevValue;
    this.nextNthValue = nextNthValue;
    this.prevNthValue = prevNthValue;
    this.diff = diff;

    initOdometer();
  }
}
function prevValue()
{
  let read= this.prevNthValue(1);

  this.currentValue=read;
  return read;
}

function prevNthValue(n)
{
  let read;
  let size=this.odometerValues.length;
  let index=this.odometerValues.indexOf(this.curr);
    if(index-(n-1)>=0)
      read= this.odometerValues[index-N];
    else
      read= this.odometerValues[(size-index-n)];
    this.currentValue=read;
    return read;
}
console.log(genOdometerValues(3).toString());
