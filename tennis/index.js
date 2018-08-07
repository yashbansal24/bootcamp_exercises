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

function printBoard(pA,pB,gA,gB,sA,sB) {
  console.log("player:\t","A","B");
  console.log("sets:\t",sA,sB);
  console.log("games:\t",gA,gB);
  console.log("points:\t",pointsToScore(pA),pointsToScore(pB));
  console.log(state(pA,pB).state);
}

function tennisGame(str) {
  let pA=0,pB=0,gA=0,gB=0,sA=0,sB=0;
  let n = str.length;
  for(let i=0;i<n;i++) {
    if(str[i] === 'A') pA+=1;
    else pB+=1;

    let st = state(pA,pB);

    if(st.state === "DEUCE") {
      pA = pB=3;
    }

    if(st.state == "WIN") {
      if(st.player=='A') gA++;
      else gB++;
      pA=pB=0;
    }

    if(setWon(gA,gB)) {
      if(setWon(gA,gB) === 'A') sA++;
      else sB++;
      gA = gB = 0;
    }
  }
  printBoard(pA,pB,gA,gB,sA,sB);
}

function main(str) {
  tennisGame(str);
}

main("ABABABAA");
