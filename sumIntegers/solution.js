var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

var toAdd = [];
fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    toAdd.push(line);
});

console.log(toAdd.reduce(function(a,c) { return +c+a; },0));

