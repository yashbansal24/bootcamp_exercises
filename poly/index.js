
function strToPolyUnits(str) {
  return str.replace(/ /g,'').replace(/-/g,"+-").split('+')
  .filter(function(e) {return e});
}

function parseToPolyUnit(str) {
  let coeff,exp = 0;
  let xInd = str.indexOf("x");
  if(xInd === -1)
    return { coeff: parseInt(str), exp: 0};

  if(xInd === 0)
    coeff = 1;
  else
    coeff = parseInt(str.slice(0,xInd));

  let expInd = str.indexOf("^");
  if(expInd === -1)
    exp = 1;
  else {
    exp = parseInt(str.slice(expInd+1));
  }

  return {
    coeff: coeff,
    exp: exp
  };
}

//console.log(parseToPolyUnit("3"));
//console.log(parseToPolyUnit("-5x^2"));
//console.log(parseToPolyUnit("-12x"));

function computeDegree(parsedTerms) {
  let max_deg = 0;
  for(let term of parsedTerms) {
    max_deg = Math.max(term.exp, max_deg);
  }
  return max_deg;
}

function parseToPolyRep(str) {
  let terms = strToPolyUnits(str);
  let parsedTerms = terms.map(x => parseToPolyUnit(x));
  let degree = computeDegree(parsedTerms);
  let polyArray = new Array(degree+1).fill(0);

  for(let x of parsedTerms) {
    polyArray[x.exp] = x.coeff;
  }
  return polyArray;
}

// -------- Operations -----------

function addPolynamial(poly,toSubstract) {
    let polyOneArray;
    let polyTwoArray;
    polyOneArray = this.rep;
    polyTwoArray = poly.rep;

    n = Math.max(polyTwoArray.length, polyOneArray.length);

    // padding
    while(n - polyOneArray.length > 0) polyOneArray.push(0);
    while(n - polyTwoArray.length > 0) polyTwoArray.push(0);

    let sumPolyArray = new Array(n).fill(0);
    for(let i =0;i< n;i++){
        if(toSubstract){
            sumPolyArray[i] = polyOneArray[i]+(-1)*polyTwoArray[i];
        } else {
            sumPolyArray[i] = polyOneArray[i]+polyTwoArray[i];
        }
    }

    return sumPolyArray;
}

function subtractPolynomial(poly) {
    return this.add(poly,true);
}

function multiplyPolynomial(poly) {
  var A=poly.rep;
	var B=this.rep;
	let n=A.length + B.length - 2 ;
	var exp=new Array(n+1).fill(0);
	for(let i=0;i<A.length;i++)
       for(let j=0;j<B.length;j++)
           exp[i+j]+=A[i]*B[j];

	return exp;
}

class Polynomial {
	constructor(str) {
  	this.rep = parseToPolyRep(str);
    this.getPolyFromArray = function() {
      return this.rep;
    }

    this.computeDegree = computeDegree;
    this.add = addPolynamial;
    this.subtract = subtractPolynomial;
    this.multiply = multiplyPolynomial;
  }
}

//Format
let str = "3x+5-12x^5";
console.log("Representation:",str,":",parseToPolyRep(str));

//add
p = new Polynomial("-5x^2+7x+12");
q = new Polynomial("-12x");
console.log("Add: ",p.rep,q.rep,":",p.add(q));
//subtract
console.log("Subtract: ",p.rep,q.rep,":",p.subtract(q));
//multiply
pp = new Polynomial("x+2");
qq = new Polynomial("x-2");
console.log("Multiply:",pp.rep,qq.rep,":",pp.multiply(qq));
