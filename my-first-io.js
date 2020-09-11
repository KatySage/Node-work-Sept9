const fs = require('fs');
const stuff = fs.readFileSync(process.argv[2])
const str = stuff.toString()
var arr = str.split('\n')
console.log(arr.length - 1)