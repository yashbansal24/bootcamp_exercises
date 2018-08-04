function adjacent(input1,input2){
	let count = 0;
	let n=input1.length
	for(var i=0;i<n;i++)
		if(input1[i]!=input2[i])
			count++;
	return count==1
}

module.exports = {
	adjacent: adjacent
};