const fs = require('fs');
const path = require('path');

const directory = process.argv[2]
const ext = process.argv[3]

module.exports = function prints_list (directory, ext, callback){
    var array = []
    fs.readdir(directory, function (err, data) {
    if (err) {
        return callback(err)}
    data.forEach(item => {
        if (path.extname(item) == '.' + ext) {
        array = [...array, item]}
        })
    callback(null, array)
    })
}