const path = require('path');



const express = require('express');
const host_router = express.Router();

const rootdir = require('../utils/utils')








host_router.get("/user-details", (req, res, next) => {

    res.sendFile(path.join(rootdir, 'views', 'input.html'));



})

host_router.post("/submit", (req, res, next) => {

    res.sendFile(path.join(rootdir, 'views', 'submit.html'));



})

module.exports = host_router;

