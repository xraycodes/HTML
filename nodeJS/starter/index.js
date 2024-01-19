const fs = require('fs');

// To read files
const textIn = fs.readFileSync('./txt/final.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written')