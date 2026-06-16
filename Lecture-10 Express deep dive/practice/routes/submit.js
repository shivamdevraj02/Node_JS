const path =require('path');


const express =require('express');
const submit_Router = express.Router();



const root_dir = require('../utils/utils-app')

submit_Router.post("/submit", (req, res, next) => {

    res.sendFile(path.join(root_dir,'views','submit.html'))


})


module.exports =submit_Router;