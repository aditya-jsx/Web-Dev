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

// const express = require("express");
// const app = express();



// let requestCount = 0;

// function requestHandler(req, res, next){
//     requestCount = requestCount + 1;
//     console.log(`number of requests = ${requestCount}`);

//     //! 3) gave some value to the name variable
//     req.name = "Aditya";

//     //! 5) this is the third thing that the middlewares can do, which is calling the next middleware
//     // next();




//     //! 6) the second thing it can do is that it can stop the req-res cycle, for this we have to cmnt out next().
//     res.status(401).json({
//         msg: "i ended the cycle",
//     }) 
//     // next();

//     //! 6.2) if we dont cmnt out next(), in this situation it'll not log the response of the next middleware but it'll log the things written in it, and it'll throw an error as well.
// }



// function addHandler(req, res, next){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     //! 4) updated the value of the name variable and then logged it
//     req.name = "Shrivastav";
//     console.log(req.name);
    
//     res.json({
//         ans: a + b,
//     });

// }



// //! 1) now first the command will reach to the requestHandler to increase the request, then it'll log the number of requests made and move to the next middleware, then command will reach the addHandler middleware and it'll take two queries and then add those number and give the output.
// app.get("/add", requestHandler, addHandler);



// //! 2) now the first thing that middlewares can do is to change the req or res object

// app.listen(3000)




















//! Assignment 1 done in 5.2-Assignment
































//! Commonly used Middlewares




//! like external libraries, there are some external middlewares that we can use

//! 1) express.json() :- the data that we receive form the put or post requests from whether postman or a frontend form comes in JSON format, this tool converts that JSON data into a JavaScript object, basically it helps our express app to understand the data.
//! 2) under the hood, express.json() uses bodyParser which is an another library

//! 3) if we send a post or put request without parsing the data then express will not be able to read the data and it'll throw an error calling it undefined
//! 4) so we always have to parse the data before sending it.
// parse the data - converting it into js object


//! why we call the express.json function inside the app.use, because express.json isa funciton that on calling returns another function that we want to use, so that's why we call express.json inside app.use

// app.use(express.json());





// const express = require("express");
// const app = express();


// app.listen(3000)































//! CORS - Cross origin resource sharing

//! 1) We know that we host frontend and backend in different servers, here we'll learn how the frontend hosted on the first server gets data from the backend hosted on another server.

//! 2) first we create a simple backend, then we create the html file which hits the backend server using fetch, go to index.html





//! After reading from index.html
//! 3) there is a library to do this thing, cors

const express = require("express");
const app = express();

//! 4) we have to require that library first
const cors = require("cors");

//! 5) if we want to allow from any frontend domain then we do this
// app.use(cors());

//! 6) if we want to allow requests from a single or some specific frontend domains then (un cmnt code below 5/6 to learn upto 7)
// app.use(cors({
//     domains: ["https://localhost:54359"] 
// }));
//! 8.2) remove cors for this

//! 7) now how to host both frontend and backend on the same domain

app.use(express.json());

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    })

})


//! 8) use this, it'll work even if we remove cors
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})


//! 9) it's working, we don't do this usually until we're using next.js which automatically do this


app.listen(3000);