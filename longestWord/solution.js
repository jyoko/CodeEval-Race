var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var words = line.split(' ');

  return words.reduce(function(a,c) {
    return (c.length>a.length)?c:a;
  },'');
}
