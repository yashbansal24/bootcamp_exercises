// utility functions
function minDiffFloorUtil(a,b,diff,floor) {
  if(a-b >= diff && a>=floor)
    return 1;
  else if(b-a >= diff && b>=floor)
    return 2;
  return 0;
}

function diffFloorUtil(a,b,diff,floor) {
  if(a-b === diff && a>=floor)
    return 1;
  else if(b-a === diff && b>=floor)
    return 2;
  return 0;
}

function numToPlayer(n) {
  if(n === 1) return 'A';
  if(n === 2) return 'B';
  return '';
}

// state computation
function computeGameState(a,b,setState) {
  if(setState === "TIE") {
    let win = minDiffFloorUtil(a,b,2,7);
    if(win)
      return {state: "WIN", player: numToPlayer(win)};

    return {state: "NORMAL", player: ''};
  }

  let win = minDiffFloorUtil(a,b,2,4);
  if(win)
    return {state: "WIN", player: numToPlayer(win)};

  let adv = diffFloorUtil(a,b,1,4);
  if(adv)
    return {state: "ADV", player: numToPlayer(adv)};

  let deuce = diffFloorUtil(a,b,0,3);
  if(deuce)
    return {state: "DEUCE", player: numToPlayer(deuce)};

  return {state: "NORMAL", player: ''};
}

function computeSetState(a,b,prevState) {
  let tieBreaker = diffFloorUtil(a,b,1,7);
  if(prevState === "TIE" && tieBreaker)
    return { state: "WIN", player: numToPlayer(tieBreak) };

  let tie = diffFloorUtil(a,b,0,6);
  if(tie)
    return { state: "TIE", player: '' };

  let win = diffFloorUtil(a,b,2,6);
  if(win)
    return { state: "WIN", player: numToPlayer(win) };

  return { state: "NORMAL", player: '' };
}

function updateGameState() {
  this.game = computeGameState(this.pA,this.pB,this.set.state);

  if(this.game.state === "DEUCE") {
    this.pA = this.pB = 3;
  }

  if(this.game.state === "WIN") {
    if(this.game.player=='A') this.gA++;
    else this.gB++;

    this.pA = this.pB = 0;
    this.game = computeGameState(this.pA,this.pB,this.set.state);
  }
}

function updateSetState() {
  this.set = computeSetState(this.gA,this.gB,this.set.state);
  if(this.set.state === "WIN") {
    if(this.set.player=='A') this.sA++;
    else this.sB++;

    this.gA = this.gB = 0;
    this.set = computeSetState(this.gA,this.gB,this.set.state);
  }
}

function applyNext(c) {
  if(c === 'A') this.pA += 1;
  else this.pB += 1;

  this.updateGameState();
  this.updateSetState();
}

function pointsToScore(p,setState) {
  const scoreMap = {
    0:0, 1:15, 2:30, 3:40, 4:"ADV"
  };
  const tieScoreMap = {
    0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7
  };

  if(setState === "TIE") return tieScoreMap[p];
  return scoreMap[p];
}

function genBoard() {
  let str = "";
  str += "player:\tA B\n";
  str += "sets:\t"+this.sA+" "+this.sB+"\n";
  str += "games:\t"+this.gA+" "+this.gB+"\n";
  str += "points:\t"+pointsToScore(this.pA,this.set.state)+" "+pointsToScore(this.pB,this.set.state)+"\n";
  str += this.game.state+"\n";
  str += this.set.state+"\n";
  return str;
}

function printBoard() {
  console.log(this.genBoard());
}

class TennisMatch {
  constructor() {
    this.pA = this.pB = 0;
    this.gA = this.gB = 0;
    this.sA = this.sB = 0;

    this.game = {state: "NORMAL", player: ''};
    this.set = {state: "NORMAL", player: ''};

    this.updateGameState = updateGameState;
    this.updateSetState = updateSetState;
    this.next = applyNext;
    this.genBoard = genBoard;
    this.printBoard = printBoard;
  }
}

function main(str) {
  let tennisMatch = new TennisMatch();
  for(let c of str) {
    tennisMatch.next(c);
  }
  tennisMatch.printBoard();
  //tennisGame(str);
}

main("AAAABBBBAAAABBBBAAAABBBBAAAABBBBAAAABBBBAAAABBBBAAAAAAA");
