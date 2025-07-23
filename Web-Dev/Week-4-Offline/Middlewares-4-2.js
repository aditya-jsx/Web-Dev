// Notes: - https://bold-flax-21a.notion.site/Middleware-via-examples-1a125f71564980b8844ac8fb632b954a

//! Middlewares and CORS

//! The role of the (middleware) is to make sure only the people which has legitimate access can go through
//! In simple words (express) is just to middlewares chained one after the another.


// it is a funciton with access to the request onject, response object and the next middleware funciton on the application's req-res cycle,
// next middleware is commonly denoted by the next variable.

//! Middlewares can :-

// 1) it can end the req-res cycle
// 2) it can execute any code
// 3) it can make changes to the req-object and res-object
// 4) it can call the next middleware function in stack



//! why don't we create a large middleware for all the checks, as middlewares can be reused and they can server different things.

















//! making a amusement park ride example

//! 1) right now we are making it without using middleware

const express = require("express");

const app = express();


//! 2) a function as a check for age which will return a boolean(this is out ticket checker)
function isYoungEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}






//! 3) get request, we have to pass the age as an query parameter (in the localhost link using ?age=30), have to use req.query to make sure the age variable in catched.
// app.get("/ride1", function(req, res){
//     if(isYoungEnough(req.query.age)){
//         res.json({
//             msg: "you are eligible to go on ride 1"
//         })
//     }else{
//         res.status(411).json({
//             msg: "you are not of age yet to go on ride 1"
//         })
//     }
// })




//! 4) now we are making another endpoint for ride 2
// app.get("/ride2", function(req, res){
//     if(isYoungEnough(req.query.age)){
//         res.json({
//             msg: "you are eligible to go on ride 2"
//         })
//     }else{
//         res.status(411).json({
//             msg: "you are not of age yet to go on ride 2"
//         })
//     }
// })




//! 5.1) until now we were using a function as ticket checker, but a better way of creating a ticket checker is a middleware.


//! 5.2) this is a middleware
function isYoungEnoughMiddleware(req, res , next){
    const age = req.query.age;      // have to extract the age as well
    if(age>=14){
        next();     // we have to return the (next) function not the boolean, it means if logic=true, go to next middleware
    }else{
        res.status(411).json({
            msg: "you are not of age yet to go on ride"
        });
    }
}
//! 5.3) now that is (next) here, it is funciton which gives the access to the next middleware, and we dont't have to pass any req or res in it, express takes care of that, 
//! if the logic becomes true then the request passes to the next middleware otherwise it stops there that is what happening in the else block

//! this helps the routes to do what they are supposed of doing, that is to tell whether you are eligible to ride or not.







//! 6) now how to call the middlewares in the routes
//! we kow that the express application is a series of middleware funciton calls, then we'll call it as a function, before the req, res function so that it gets called early
app.get("/ride1", isYoungEnoughMiddleware, function(req, res){
        res.json({
            msg: "you are eligible to go on ride 1"
        })
})


app.get("/ride2", isYoungEnoughMiddleware, function(req, res){
        res.json({
            msg: "you are eligible to go on ride 2"
        })
})

//! 7) now if we want every route to use a common middleware then we can do this,
//! remove the middleware from every route and do: -
// app.use(isYoungEnoughMiddleware);
//! IMPORTANT - it'll only trigger all the endpoints defined below this app.use



//! 8) the high level of how this routes work is that
//! firstly the command goes to the endpoint declared in the server,
//! then the command goes to the middleware, 
//! then the logic runs and if it is true then the command reaches the next middleware function otherwise it executes with an error msg,
//! then it goes to the required endpoint, and the endpoint do the work that it is supposed to do.


app.listen(3000);