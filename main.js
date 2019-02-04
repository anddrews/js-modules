var math = require('./calculate.js');
var output = require('./console-interface.js');

function main () {
	var a = 2;
	var b = 3;

	var result = math.sum(a, b);

	output(result);
}

main();