const express = require("express");
const app = express()


//! You have been given an express server which has a few endpoints
//! Your task is to create a global middleware (app.use)
//! which will rate limit the requests from the user to only 5 requests per second
//! if a user send more than 5 requests in a second, then the server should block them with a 404
//! Users will be sending their user id in the header as 'user-id'
//! You have been given numberOfRequestsForUser object to start off, which every second



//! Given variable
let numberOfRequestsForUser = {};
setInterval(()=>{
    numberOfRequestsForUser = {};
}, 1000)

app.use(function(req, res, next){
    const userId = req.header("user-id");
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
        if(numberOfRequestsForUser[userId] > 5){
            res.status(411).json({
                msg: "wait for a sec before sending more requests"
            })
        }else{
            next();
        }
    }else{
        numberOfRequestsForUser[userId] = 1;
        next();
    }
})
// this middleware first stores the userId received as a header in a variable, if the numberofrequests variable with a userid is present then the count will be increased by 1, and then it'll check whether the count is > 5 or not, if it is, then the error code will be sent otherwise it'll directed towards the next middleware, if no count of user with that userId is present then we'll make it 1, and direct it to the next middleware



app.listen(3000)