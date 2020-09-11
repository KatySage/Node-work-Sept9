const mymodule = require('./mymodule.js');
const directory = process.argv[2]
const ext = process.argv[3]

mymodule(directory, ext, function (err, list) {
    if (err){
    return console.error('Your error is: ', err)}
    list.forEach(function (item) {
        console.log(item)
    })
})