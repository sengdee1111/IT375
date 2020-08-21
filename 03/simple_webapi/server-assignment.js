const http = require('http');
// create server
const server = http.createServer((req, res)=>{
res.end('Listening to request on port 3000');
});
// listen to request
server.listen(3000,'127.0.0.1',()=>{
console.log('Listening to request on port 3000');
});