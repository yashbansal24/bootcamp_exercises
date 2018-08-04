const mainModule = require('./index')


function test(){
	cases = [
	{input: "CLAY", out:"GOLD"},
	{input: "STRING", out:"SPRING"},
	{input: "GOLD", out:"COME"},
	]
	n = cases.length
	for(var i=0;i<n;i++)
		mainModule.find_path(cases[i].input,cases[i].output)
}

test();