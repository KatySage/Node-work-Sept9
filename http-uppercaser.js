const port = process.argv[2]
const http = require('http')
const map = require('through2-map')

let server = http.createServer(function callback (request, response) {
    if (request.method === 'POST'){
        request.pipe(map(function (chunk) {
        return chunk.toString().split('').join('').toUpperCase()
    })).pipe(response)
    } else {
        console.log('error')
    }
})
server.listen(port)


    