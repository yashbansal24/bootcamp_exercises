function genOdometerValues(n) {
  if(n <= 0 || n > 9)
    return [];
  if(n === 1)
    return [1,2,3,4,5,6,7,8,9];
  let tmpList = genOdometerUtil(n-1);
  let res = [];
  for(let num of tmpList) {
    for(let i=(num%10)+1;i<=9;++i)
      res.push(num*10+i);
  }
  return res;
}

class Odometer {
  constructor(n) {
    this.odometerValues = genOdometerValues(n);
    if(odometerValues.length > 0)
      this.currentValue = odometerValues[0];

    this.nextValue = nextValue;
    this.prevValue = prevValue;
    this.nextNthValue = nextNthValue;
    this.prevNthValue = prevNthValue;
    this.diff = diff;
  }
}
