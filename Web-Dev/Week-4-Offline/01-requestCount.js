const express = require("express");
const app = express()


//! the assignment is:- we have to create a middleware for logging the number of requests on a server.
// your task is to create a global middleware using(app.use) which will maintain a count of the number of requests made to the server in the global requestCount variable
// you are given some specific end points which you don't have to touch




//! Our Global variable

let requestCount = 0;
// the task is to make it's value go up by one whenever a new request comes to the sever



//! Our Global Middleware

app.use(function(req, res, next){
    requestCount  = requestCount + 1;
    next();
})
//? just by adding these two lines of code, we can track the number of requests
//? because whenever a request is called the command will always reach the middleware first which will increase the count then the end point will do what it is supposed to do.



//! there is another method to so the same thing
//? y adding this line of code as the first line of every end point, BUT this violates DRY principle



//! These below are the endpoints

app.get("/user", function(req, res){
    res.status(200).json({ name: 'john' });
})


app.post("", function(req, res){
    res.status(200).json({ msg: 'created dummy user' });
})


app.get("/requestCount", function(req, res){
    res.status(200).json({ requestCount });
})





app.listen(3000);