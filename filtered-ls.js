const fs = require('fs');
const path = require('path')

const stuff = fs.readdir(process.argv[2], function callback(err, list){
    list.forEach(item => {
        if (path.extname(item) == '.' + process.argv[3]){console.log(item)}
    })
})
