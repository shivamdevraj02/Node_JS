const express = require('express');
const fs = require('./user');
const bodyParser = require('body-parser');
const app = express();
app.use((req, res, next) => {
    console.log(req.method, req.url)
    console.log("1 dummy middleware");
    next()

})
app.use((req, res, next) => {
    console.log(req.method, req.url)

    console.log("second  dummy middle ware")
    next()

})
// app.use((req,res,next)=>{

//     console.log("third middle ware")
//    res.send("<h1>Helo from the third middle ware</h1>")
//     next()

// })

app.get("/", (req, res, next) => {
    console.log("handling from / middleware")
    res.send(`<h1> welcome to this page </h1>
        
        
        `)
    next()

})
app.get("/contact-us", (req, res, next) => {

    console.log("handling from /contact-us middleware")

    res.send(`
        
        <h1>Please gives your detailes </h1>
        <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <input type="submit" value="Submit">
        </form>

        `)

    next()

})

/*  Niche diye gay method se ham body ko parse karte iske liye hame  


const bodyParser = require('body-parser'); karni parti he and terminal me npm install body-parser --save command bhi chalaya jata he..

*/

app.use(bodyParser.urlencoded());


app.post("/submit", (req, res, next) => {

    console.log(req.url,req.method,req.body);

    res.send("<h1>We will contact you shortly</h1>")


})





const PORT = 8001;
app.listen(PORT, () => {
    console.log(`The server is running on the address http://localhost:${PORT}`)
})











