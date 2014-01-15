var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var moo = line.split(" ");
        var poo = [];
        for (var i = moo.length - 1; i >= 0; i--) {
        	poo.push(moo[i]);
        }
        poo = poo.join(" ");
        console.log(poo);
    }
});