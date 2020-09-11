const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
const http = require('http')
var string1 = ""
var string2 = ""
var string3 = ""

function getHTTP1 () {
    http.get(url1, function callback (response) {
    response.on('data', function (data) {
        string1 += data
        })
    response.on('end', () => {
        console.log(string1)
            })
        })
    }
    function getHTTP2 () {
        http.get(url2, function callback (response) {
        response.on('data', function (data) {
            string2 += data
            })
        response.on('end', () => {
            console.log(string2)
                })
            })
        }
        function getHTTP3 () {
            http.get(url3, function callback (response) {
            response.on('data', function (data) {
                string3 += data
                })
            response.on('end', () => {
                console.log(string3)
                    })
                })
            }

getHTTP1()
getHTTP2()
getHTTP3()

// 'use strict'
//     const http = require('http')
//     const bl = require('bl')
//     const results = []
//     let count = 0

//     function printResults () {
//       for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }

//           results[index] = data.toString()
//           count++

//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }

//     for (let i = 0; i < 3; i++) {
//       httpGet(i)
//     }