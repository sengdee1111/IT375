const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
// write File
const textout = `Avocado information:${textIn}\nCreat on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textout);
console.log('File Written');
