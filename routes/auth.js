// const path = require('path');


// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");

// const userrouter = express.Router();

// const rootdir = require('../utils/util')

// userrouter.get("/login", (req, res, next) => {
//     res.render("login", { pageTitle: "Login" });

// })

// userrouter.post("/login", (req, res,next) => {

//     res.redirect("/");


//     // console.log("helo from  post",req.body);
// // });

// module.exports = userrouter;






module.exports = (req, res, next) => {

    console.log("Auth Check:", req.isLoggedIn);

    if (!req.isLoggedIn) {
        return res.redirect("/login");
    }

    next();
};

// console.log("Auth Check:", req.isLoggedIn);