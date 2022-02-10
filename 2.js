const fs = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request', (request, response)=>{
    fs.readFile('./big_file.txt', (error, data)=>{
        if(error) throw error
        response.end(data)
        console.log('done')
    })
})
server.listen(8888)



const server = http.createServer()
server.on('request', (request, response)=>{
    const stream = fs.createReadStream('./big_file.txt')
    stream.pipe(response)
})
server.listen(8888)