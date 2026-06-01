const path = require('path');

const express = require('express');
const user_routes = express.Router();

const rootdir =require('../utils/utils')

user_routes.get("/", (req, res, next) => {

    res.sendFile(path.join(rootdir,'views','home.html'));


    // next()

})

module.exports =user_routes;
