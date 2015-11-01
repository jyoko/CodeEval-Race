var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var split = line.split(' ');
  var fizz = +split[0],
      buzz = +split[1],
      n    = +split[2]+1;

  var str;
  var ret = '';
  for (var i=1;i<n;i++) {
    str = '';
    str += (i%fizz===0)?'F':'';
    str += (i%buzz===0)?'B':'';
    if (str==='') {
      ret += i+' ';
    } else {
      ret += str+' ';
    }
  }
  ret = ret.trim();

  return ret;
}
