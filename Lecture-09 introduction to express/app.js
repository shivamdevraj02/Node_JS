

const express = require('express');

// const requestHandler = require('./user');

const app = express();

app.use((req, res, next)=>{
    console.log('Middleware 1', req.url, req.method);
    // res.send("<h1>Hello from the express</h1>");
    next();
});
app.use((req, res, next)=>{
    console.log('Middleware 2',req.url, req.method);
    next();
});



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});