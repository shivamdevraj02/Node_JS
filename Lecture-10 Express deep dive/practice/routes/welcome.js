const path =require('path');

const express =require('express');
const welcome_Router = express.Router();


const root_dir = require('../utils/utils-app')

welcome_Router.get("/", (req, res, next) => {
    console.log("handling from / middleware")
    res.sendFile(path.join(root_dir,'views','welcome.html'));
   

})




module.exports =welcome_Router;