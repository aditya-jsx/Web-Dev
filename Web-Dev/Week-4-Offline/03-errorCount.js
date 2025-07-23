const express = require("express");
const app = express()

//! You have been given an express server which has a few endpoints
//! Your task is to 
//! 1) ensure that if there is ever an exception, the end user sees a status code of 404.
//! 2) maintain the errorCount variable whose value should go up every time there is an exception in any endpoint.
//! which will rate limit the requests from the user to only 5 requests per second
//! if a user send more than 5 requests in a second, then the server should block them with a 404
//! Users will be sending their user id in the header as 'user-id'
//! You have been given numberOfRequestsForUser object to start off, which every second




let errorCount = 0;




//! 1) a common way of throwing error is 
app.get("/user", function(req, res){
    throw new error("error");
    res.status(200).json({ name: "john" })
})
//! 2) but throwing this type of error will show the console to the user, which is not good








//! 3) in Express there is another way to throwing error,
//! Error handling middleware
//! this is defined at the end of the file 
app.use(function(err, req, res, next){
    res.status(404).json({});
    errorCount = errorCount + 1;
}) 

//! in default the express with send the exception with a 500 status code whenever an error occurs, 
//! after using error handling middleware, express will not send 500, it'll use the error handling middleware to respond back to the user.
//! and to increment the errorCount variable for an exception we'll increment it in the error Hanndling Middleware




app.listen(3000);