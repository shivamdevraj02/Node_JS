const path = require('path');

const auth = require("./auth");

const mongoose = require("mongoose");


const { check, validationResult } = require("express-validator");


const express = require("express");
const app = express();

app.set("view engine", "ejs");

const userrouter = express.Router();

const rootdir = require('../utils/util')

userrouter.get("/products", auth, (req, res, next) => {

    console.log('hello home page');

    res.render("products", {
        pageTitle: "Products",
        isLoggedIn: req.isLoggedIn
    }
    )
})

userrouter.get("/cart", auth, (req, res, next) => {

    console.log('hello home page');

    res.render("cart", {
        pageTitle: "Cart",
        isLoggedIn: req.isLoggedIn
    }
    );
})





const signupValidation = [
    check("name")
        .notEmpty()
        .withMessage("Full Name is required")
        .isLength({ min: 3 })
        .withMessage("Full Name must be at least 3 characters long"),

    check("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email address"),

    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),

    check("confirmPassword")
        .notEmpty()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match");
            }
            return true;
        })
];











userrouter.get("/signup", (req, res, next) => {
    res.render("auth/signup", {
        pageTitle: "Signup",
        isLoggedIn: req.isLoggedIn
    });
    
});





const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User_Ecommerce = mongoose.model("User_Ecommerce", userSchema);



userrouter.post("/signup", signupValidation, (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render("auth/signup", {
            pageTitle: "Signup",
            errorMessage: errors.array()[0].msg,
            oldInput: req.body,
            isLoggedIn: req.isLoggedIn
        });
    }

    const { name, email, password } = req.body;

    const user = new User_Ecommerce({
        name,
        email,
        password
    });

    user.save()
        .then(() => {
            console.log("User Saved");
            res.redirect("/login");
        })
        .catch(err => {
            console.log(err);
        });
});






userrouter.get("/login", (req, res) => {
    res.render("auth/login", {
        pageTitle: "Login",
        isLoggedIn: req.isLoggedIn,
        error: null,
        errorType: null
    });
});

// userrouter.post("/login", (req, res) => {
//     // console.log("helo from  post",req.body);
//     // req.isLoggedIn = true;
//     // res.cookie("isLoggedIn", true);
//     req.session.isLoggedIn = true;
//     res.redirect("/");
// });

userrouter.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User_Ecommerce.findOne({ email });

    if (!user) {
    return res.render("auth/login", {
        pageTitle: "Login",
        error: "Account not found. Please sign up first.",
        errorType: "not-signed-up",
        isLoggedIn: false
    });
}

    if (user.password !== password) {
    return res.render("auth/login", {
        pageTitle: "Login",
        error: "Incorrect password. Please try again.",
        errorType: "wrong-password",
        isLoggedIn: false
    });
}

    req.session.isLoggedIn = true;

    req.session.save(() => {
        res.redirect("/");
    });
});

userrouter.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});


userrouter.get("/orders", auth, (req, res, next) => {
    res.render("order", {
        pageTitle: "Orders"

        ,
        isLoggedIn: req.isLoggedIn

    }
    );

})


module.exports = userrouter;
