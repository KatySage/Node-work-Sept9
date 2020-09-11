const url = process.argv[2]
const http = require('http')

function getHTTP () {
    http.get(url, function callback (response) {
    response.on('data', function (data) {
        console.log(data.toString())
        })
    })
}
getHTTP()
