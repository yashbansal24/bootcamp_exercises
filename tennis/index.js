const TennisMatch = require('./tennisMatch');

function main(str) {
  let tennisMatch = new TennisMatch();
  for(let c of str) {
    tennisMatch.next(c);
  }
  tennisMatch.printBoard();
  //tennisGame(str);
}

main("AAAABBBBAAAABBBBAAAABBBBAAAABBBBAAAABBBBAAAABBBBAAAAAAA");
