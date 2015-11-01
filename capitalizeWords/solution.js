var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var split = line.split(' ');
  split = split.map(function(v) {
    var t = v.split('');
    t[0] = t[0].toUpperCase();
    return t.join('');
  });

  return split.join(' ');
}
