const port = process.argv[2]
const fileLocation = process.argv[3]
const http = require('http')
const fs = require('fs')

let server = http.createServer(function callback (request, response) {
    fs.createReadStream(fileLocation).pipe(response)
})
server.listen(port)