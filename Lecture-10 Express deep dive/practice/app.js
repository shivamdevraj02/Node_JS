
const path =require('path');
const express = require('express');
const fs = require('./user')
const app = express();


const welcome_Router =require('./routes/welcome');
const input_Router =require('./routes/input');
const submit_Router =require('./routes/submit');

const root_dir = require('./utils/utils-app')

app.use((req, res, next) => {
    console.log(req.method, req.url)
    console.log("1 dummy middleware");
    next()

})
app.use((req, res, next) => {
    console.log(req.method, req.url)

    console.log("second  dummy middle ware")
    next()

})
// app.use((req,res,next)=>{

//     console.log("third middle ware")
//    res.send("<h1>Helo from the third middle ware</h1>")
//     next()

// })

app.use(welcome_Router);

app.use(input_Router);

app.use(submit_Router);

app.use( (req, res, next) => {

    res.status(404).sendFile(path.join(root_dir,'views','404.html'));


})






const PORT = 8001;
app.listen(PORT, () => {
    console.log(`The server is running on the address http://localhost:${PORT}`)
})











