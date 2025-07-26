const express = require("express");

const app = express();




//! 1) Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

//! Ans

function middlewareLogger(req, res, next){
    console.log(`the method used is ${req.method}`);    //! 2)
    // console.log(`the url used is ${req.url}`);   //! 3) this will give only the url of the endpoints not the full url.
    // console.log(`the url used is ${req.hostname}`); //! 4) this will give the url (localhost).

    //! 5) but now we want the full url
    console.log("the url is" + req.protocol + "://" + req.hostname + req.url);
    

    //! 6)
    console.log(`the timstamp is ${new Date()}`);
    next();
}

// it'll add this middleware to all the endpoints below it
app.use(middlewareLogger);




app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);