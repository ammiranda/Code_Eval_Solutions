var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(';');
        var firstArray = line[0].split(',');
        var secondArray = line[1].split(',');
        var answerArray = [];
        if (firstArray.length > secondArray.length) {
        	var longLength = firstArray.length;
        	var shortArray = secondArray;
        	var longArray = firstArray;
        }
        else {
        	var longLength = secondArray.length;
        	var shortArray = firstArray;
        	var longArray = secondArray;
        }
        for (var i = 0; i < longLength; i++) {
        	if (longArray.indexOf(shortArray[i]) != -1) {
        		answerArray.push(shortArray[i]);
        	}
        }
        console.log(answerArray.join(','));
    }
});