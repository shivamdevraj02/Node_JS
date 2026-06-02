const path = require('path');

const express = require('express');
const user_routes = express.Router();

const rootdir =require('../utils/utils');
const { home } = require('./hostrouter');

user_routes.get("/", (req, res, next) => {

    console.log(home);

    res.render('home',{home:home});


    // next()

});

module.exports =user_routes;
