var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var split = line.split('|');
  var l = split[0].split(' ').filter(function(v) { return v!==''; });
  var m = split[1].split(' ').filter(function(v) { return v!==''; });

  var ret = [];
  for (var i=0;i<l.length;i++) {
    var a = l[i] * m[i];
    ret.push(a);
  }

  return ret.join(' ');
}
