//! Middlewares and Cors



//! In this we'll be focusing on -
//! 1) better routing
//! 2) add database
//! 3) middlewares


//? the biggest usecase of middlewares is authentication













//! 1) writing some code to understand this


// const express = require("express");
// const app = express();

//! 2) now what if we want to count the number of requests


//! 3) we'll probably do something like this
// let requestCount = 0


//! 5.2) like this
//! 6.3) catching req, and res as arguments
//! 6.4) by doing this we're making our own tyoe of middleware
// function requestCounter(req, res){
//     requestCount = requestCount + 1;
//     console.log(`the number of requests is ${requestCount}`);

//     //! 6) now we want to access req and res here, so how'll we do that without using middleware, we'll just pass them in the endpoint and catch them here
// }



// app.get("/add", function(req, res){

//     //! 4) and then this

//     // requestCount = requestCount + 1;
//     // console.log(requestCount);

    
//     //! 5) but instead of doing this we can create our own middlware
//     // requestCounter();

//     //! 6.2) passing req and res as parameters
//     requestCounter(req, res);

//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b,
//     })
// })



// app.listen(3000)




























//! Doing the same thing by using middlewares

const express = require("express");
const app = express();



let requestCount = 0;

function requestHandler(req, res, next){
    requestCount = requestCount + 1;
    console.log(`number of requests = ${requestCount}`);

    //! 3) gave some value to the name variable
    req.name = "Aditya";

    //! 5) this is the third thing that the middlewares can do, which is calling the next middleware
    // next();




    //! 6) the second thing it can do is that it can stop the req-res cycle, for this we have to cmnt out next().
    res.status(401).json({
        msg: "i ended the cycle",
    }) 
    // next();

    //! 6.2) if we dont cmnt out next(), in this situation it'll not log the response of the next middleware but it'll log the things written in it, and it'll throw an error as well.
}



function addHandler(req, res, next){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    //! 4) updated the value of the name variable and then logged it
    req.name = "Shrivastav";
    console.log(req.name);
    
    res.json({
        ans: a + b,
    });

}



//! 1) now first the command will reach to the requestHandler to increase the request, then it'll log the number of requests made and move to the next middleware, then command will reach the addHandler middleware and it'll take two queries and then add those number and give the output.
app.get("/add", requestHandler, addHandler);



//! 2) now the first thing that middlewares can do is to change the req or res object

app.listen(3000)