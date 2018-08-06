const dictmodule = require('./dictimport');
const adjmodule = require('./generator');

function isValidWord(word,dict) {
	return (dict[word] === 1);
}

// {word,len}

function genPathBetween(src,dest) {
	let dict = dictmodule.return_dict(src,dest);
	let q = [{word: src, len: 1, path: [src]}];
	
	while(q.length != 0) {
		let item = q.shift();
		
		for(let w in dict) {
			if(adjmodule.adjacent(item.word,w)) {
				let tmp = { 
					word: w,
					len: item.len+1,
					path: item.path.slice()
				};
				tmp.path.push(w);
				q.push(tmp);
				delete dict[tmp.word];

				if(tmp.word === dest)
					return tmp.path;
			}
		}
	}
	return [];
}

function find_path(input,out) {
	console.log(genPathBetween(input,out));
}

module.exports = {
	find_path: find_path
};