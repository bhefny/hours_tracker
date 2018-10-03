var read = require('read-file');
var buffer = read.sync('hours.txt');
console.log(buffer)
