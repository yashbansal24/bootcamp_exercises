function split(entry) {

}

function compare(a,b) {
  return a.A - b.A;
}

function areJoinable(a,b) {
  return (a.C === b.C && a.D === b.D);
}

function maintain() {
  let len = this.currentTable.length-1;
  for(let i=0;i < len ;i++) {
    if(areJoinable(this.currentTable[i],this.currentTable[i+1])) {
      this.currentTable[i].B = this.currentTable[i+1].B;
      this.currentTable = this.currentTable.splice(i+1,1);
      len--;
    } else {
      i++;
    }
  }
}

//ENTRY FORMAT - dekh lo!!!
//entry = {A: ,B: ,C: ,D: }
function update(entry) {
  this.split(entry);
  this.maintain();
}

function printFolio() {
  console.log(this.currentTable);
}

class FolioTable {
  constructor() {
    this.currentTable = [];

    this.split = split;
    this.maintain = maintain;
    this.update = update;
    this.print = printFolio;
  }
}

module.exports = FolioTable;
