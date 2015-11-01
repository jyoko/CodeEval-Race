var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  return line.split(',').sort(function(a,b) {
    return a>b;
  }).filter(function(v,i,a) {
    return (!i || v!==a[i-1]);
  }).join(',');

}
