var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var arr = line.split('');

  var ret = arr.reduce(function(a,c) {
    return +c+a;
  },0);

  return ret;
}
