//function for calculating the score of any word in scrabble

function wordscore(word,rack){
	var tiles={};
	for (var i = 0; i <rack.length; i++) {
		if(tiles[rack[i].letter]==undefined)
			tiles[rack[i].letter]=1;
		else
			tiles[rack[i].letter]++;
	}
	var map={};
	map['A']=1;map['B']=3;map['C']=3;map['D']=2;map['E']=1;map['F']=4;map['G']=2;map['H']=4;map['I']=1;map['J']=8;map['K']=5;map['L']=1;map['M']=3;map['N']=1;map['O']=1;map['P']=3;map['Q']=10;map['R']=1;map['S']=1;map['T']=1;map['U']=1;map['V']=4;map['W']=4;map['X']=8;map['Y']=4;map['Z']=10;
	var score=0;
    for(var j=0;j<word.length;j++){
    	if(!tiles.hasOwnProperty(word[j])){
    		continue;
    	}
    	else if(tiles[word[j]] > 0)
    	{
    		score=score+map[word[j]];
    		tiles[word[j]]--;
    	}
    }
    return {"word":word,"score":score};
}
//console.log(wordscore("ASS",[{'letter':'A'},{'letter':'E'},{'letter':'D'},{'letter':'-'}]));
module.exports={
	wordscore:wordscore
};
