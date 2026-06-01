// core modules

const path = require('path');  

// External modules
const express = require('express');
const app = express();


// Local modules


const host_router = require('./routes/hostrouter');
const user_routes = require('./routes/userrouter');


const rootdir =require('./utils/utils')



app.use(express.urlencoded());

app.use(express.static(path.join(rootdir, 'public')));


app.use((req, res, next) => {
    console.log(req.method, req.url,req.body)
    next();

})
 

app.use(user_routes);
app.use(host_router);



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, 'views', '404.html'));
    // next();
});

const PORT = 8002;
app.listen(PORT, () => {
    console.log(`The server is running on the address http://localhost:${PORT}`)
})