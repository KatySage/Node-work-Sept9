const fs = require('fs');
const stuff = fs.readFile(process.argv[2], 'utf8', function callback(err, data){
    const str = data.toString()
var arr = str.split('\n')
console.log(arr.length - 1)
})
