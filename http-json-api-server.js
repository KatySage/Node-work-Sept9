const port = process.argv[2]
const http = require('http')
const map = require('through2-map')
const path = '/api/parsetime'
const unix = '/api/unixtime'
var url = require('url')

var getTime = function (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
function unixTime (time) {
    return {unixtime: time.getTime()}
}

let server = http.createServer(function (request, response) {
    if (request.method === 'GET'){
        const parseThings =  (url) => {
            switch (url.pathname){
            case path: 
                return getTime(new Date(url.query.iso))
            case unix:
                return unixTime(new Date(url.query.iso))
        }}
        url = url.parse(request.url, true)
        response.end(JSON.stringify(parseThings(url)))
    } else {
        console.log('error')
    }
})


server.listen(port)