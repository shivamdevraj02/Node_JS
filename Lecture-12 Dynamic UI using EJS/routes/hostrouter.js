const path = require('path');



const express = require('express');
const host_router = express.Router();

const rootdir = require('../utils/utils')

// const home =[];

host_router.get("/user-details", (req, res, next) => {

//   console.log(req.body.Home);
    res.render('input');



})



const home = [];

host_router.post("/submit", (req, res) => {
    home.push(req.body.Home);
    console.log(home);
    res.render('submit');
});

exports.host_router = host_router;

exports.home = home;

