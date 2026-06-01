const path =require('path');



const express =require('express');
const input_Router = express.Router();




const root_dir = require('../utils/utils-app')


input_Router.get("/contact-us", (req, res, next) => {

   

    res.sendFile(path.join(root_dir ,'views','input.html'));



})

module.exports =input_Router;