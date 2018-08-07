function state(a,b) {
  if(a>3 && a-b>=2)
    return { state: "WIN", player: 'A' };

  if(b>3 && b-a>=2)
    return { state: "WIN", player: 'B' };

  if(a==b && a>=4)
    return { state: "DEUCE", player: ''};

  if(a==4 && b==3)
    return { state: "ADV", player: 'A' };

  if(a==3 && b==4)
    return { state: "ADV", player: 'B'};

  return { state: "NORMAL", player: ''};
}

function pointsToScore(p) {
  const scoreMap = {
    0:0, 1:15, 2:30, 3:40, 4:"ADV"
  };
  return scoreMap[p];
}

function setWon(gA,gB) {
  if(gA>=6 && gA-gB >= 2)
    return 'A';
  if(gB>=6 && gB-gA >= 2)
    return 'B';
  return false;
}

function printBoard() {
  console.log("player:\t","A","B");
  console.log("sets:\t",this.sA,this.sB);
  console.log("games:\t",this.gA,this.gB);
  console.log("points:\t",pointsToScore(this.pA),pointsToScore(this.pB));
  console.log(state(this.pA,this.pB).state);
}

function applyNext(c) {
  if(c === 'A') this.pA+=1;
  else this.pB+=1;

  let st = state(this.pA,this.pB);

  if(st.state === "DEUCE") {
    this.pA = this.pB = 3;
  }

  if(st.state === "WIN") {
    if(st.player=='A') this.gA++;
    else this.gB++;
    this.pA = this.pB = 0;
  }

  if(setWon(this.gA,this.gB)) {
    if(setWon(this.gA,this.gB) === 'A') this.sA++;
    else this.sB++;
    this.gA = this.gB = 0;
  }
}

class Tennis {
  constructor() {
    this.pA = this.pB = 0;
    this.gA = this.gB = 0;
    this.sA = this.sB = 0;

    this.printBoard = printBoard;
    this.next = applyNext;
  }
}

function main(str) {
  let tennisG = new Tennis();
  for(let c of str) {
    tennisG.next(c);
  }
  tennisG.printBoard();
  //tennisGame(str);
}

main("ABABABAA");
