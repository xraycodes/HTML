const fs = require('fs');

//Blocking, synchronous way

// To read files
// const textIn = fs.readFileSync('./txt/final.txt', 'utf-8');
// console.log(textIn);
//To write files
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written')

// Non-blocking, asynchronous way
fs.readFile('./txt/starts.txt', 'utf-8', (err, data)=> {
    if (err) return console.log('Error')
    console.log(data)
})
console.log("Will read file!")