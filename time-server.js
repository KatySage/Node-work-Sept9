const net = require('net')
var strftime = require('strftime')
const port = process.argv[2]
let date = new Date();
var formatDate = strftime('%F %R', date)

const server = net.createServer(function (socket){
    socket.write(formatDate)
    socket.end('\n')
})

server.listen(port)