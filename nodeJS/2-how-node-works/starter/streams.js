const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //Solution 1 not ideal because if handling big file will crash server. good for local..
    // this method saves/reads the entire file onto variable and sends to client

    // fs.readFile('test-file.txt', (err,data) => {
    //     if (err) console.log(err)
    //     res.end(data)
    // })

    //solution 2 : streams  this method we read chunks of the file and send it to client.. piece by piece
    //still problem with this approach, the readable stream is much faster than sending the result with the response writable stream over the network
    //this will overwhelm the response stream which cannot handle all this incoming data so fast called BACKPRESSURE
    // const readable = fs.createReadStream('test-file.txt')
    // readable.on('data', chunk => {
    //     res.write(chunk)
    // })
    // readable.on('end', () => {
    //     res.end()
    // })
    // readable.on('error', err => {
    //     console.log(err)
    //     res.statusCode = 500
    //     res.end("file not found")
    // })

    // solution 3 to fix BACKPRESSURE use pipe operator which is available on all readable streams, allows us to pipe the output of a readable stream
    // right into the input of a writable stream, handles speed coming in and out
    const readable = fs.createReadStream('test-file.txt');
    //readableSource.pipe(writeableDestination)
    readable.pipe(res)
    
})




server.listen(8000, '127.0.0.1', () =>{
    console.log('listening..')
})