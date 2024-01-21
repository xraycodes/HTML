const fs = require('fs');
const http = require('http');
const url = require('url');


///// FILES

//Blocking, synchronous way

// To read files
// const textIn = fs.readFileSync('./txt/final.txt', 'utf-8');
// console.log(textIn);
//To write files
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written')

// Non-blocking, asynchronous way
// fs.readFile('./txt/starts.txt', 'utf-8', (err, data)=> {
//     if (err) return console.log('Error')
//     console.log(data)
// })
// console.log("Will read file!")



////// Server
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');    
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');    
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');    
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');    
const dataObj = JSON.parse(data)



const server = http.createServer((req, res) => {
    const pathName = req.url;
    //Overview page
    if(pathName ==='/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});

        const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%', cardsHTML)

        res.end(output);

    //Product page
    } else if (pathName === '/product'){
        res.end('This is the product')

    //API
    } else if (pathName === '/api') {    
            res.writeHead(200, {'Content-type' : 'application/json'});
            // res.end(data);

    //Not Found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>')
    }
    // res.end('Hello from the server')
    // res.end is a simple way to send a message back to client
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
})