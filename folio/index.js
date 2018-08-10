const FolioTable = require('./FolioTable');

function parsing(input) {
  if(input === "0" || input === "")
    return null;
  let values = input.split(' ');
  return {
    A: parseInt(values[0]),
    B: parseInt(values[1]),
    C: values[2],
    D: parseInt(values[3])
  };
}

function fileread(filename) {
	let entries=[];
	var fs=require('fs');
  var lines=fs.readFileSync(filename,'utf-8');
  entries=lines.split('\n');
  return entries;
}

let fileInput = fileread("folio.txt");
let input = [];
fileInput.forEach(function(item) {
  if(parsing(item))
    input.push(parsing(item));
});

let folio = new FolioTable();
folio.print();
input.forEach(function(entry) {
  folio.update(entry);
  folio.print();
});
