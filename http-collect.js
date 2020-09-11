const url = process.argv[2]
const http = require('http')
var string = ""

function getHTTP () {
    http.get(url, function callback (response) {
    response.on('data', function (data) {
        string += data
        })
    response.on('end', () => {
        console.log(string.length)
        console.log(string)
            })
        })
    }
getHTTP()
