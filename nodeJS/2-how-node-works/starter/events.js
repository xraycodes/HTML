const EventEmitter = require('events')
const http = require('http')

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new EventEmitter();

//The on is the observer, observing the emitter
myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
})

myEmitter.on('newSale', () => {
    console.log('Costumer name: Brian')
})

//can emit and pass arguments
myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock`)
})
//The object that emits the events
myEmitter.emit('newSale', 9) 


//////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received')
    // res.end('Request received')
})

server.on('request', (req, res) => {
    res.end('Another request 😄')
})

server.on('close', () => {
    console.log('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests')
})

