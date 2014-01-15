function reverse(s) {
	return s.split("").reverse().join("");
}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var array = line.split(',');
    	var standIn = parseInt(array[0]);
    	var firstInt = parseInt(array[1]);
    	var secondInt = parseInt(array[2]);
    	if (standIn < 0) {
    		standIn = standIn * -1;
    	}
    	var binaryBigNum = reverse(standIn.toString(2));
    	if (firstInt < 0) {
    		firstInt = firstInt + binaryBigNum.length;
    	}
    	else {
    		firstInt = firstInt - 1;
    	}
    	if (secondInt < 0) {
    		secondInt = secondInt + binaryBigNum.length;
    	}
    	else {
    		secondInt = secondInt - 1;
    	}
    	if (binaryBigNum[firstInt] === binaryBigNum[secondInt]) {
    		console.log('true');
    	}
    	else {
    		console.log('false');
    	}
    }
});