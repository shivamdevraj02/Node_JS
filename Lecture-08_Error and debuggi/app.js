const http =require('http');
const syntax =require('./syntax');
const runtime =require('./runtime');
const logical = require('./Logical');
const server = http.createServer((req ,res)=>{
    syntax();
    runtime();
    logical();
});

const PORT=3002;

server.listen(PORT ,()=>{
    console.log(`sever is running on the port http://localhost:${PORT}`)
})