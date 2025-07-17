//! Making the backend of a Todo Application using Express


//! Basic Boiler plate code for express
// const express = require("express");
// const app = express()

// app.get('/', function(req, res){
//     res.send('Hello World')
// })

// app.listen(3000)










// 1) we can't simpy do thigs on express so we require express
// const express = require("express");
// 2) and create a fresh app variable in it
// const app = express()

//! 3) then define all of your route handlers
// that if a request comes on the slash endpoint that is a get request, what should happen

// this will only run if someone sends a get request on a / method.
// app.get('/', function(req, res){
//     res.send('Hello World')
// })


//! 4) on which port we want to listen out http request
// app.listen(3000)


//! 5) now if we run this code then the terminal will not exit after running this file as we've created an http server, and it'll not close as it'll keep checking (kya koi request aayi ya nahi), because if the request comes then the node.js process needs to be alive to be listening to it.



//! 6) now what is req, and res
//? these are provided by the express library, it says that i am listening continuously on port 3000, and whenever a request comes on the / endpoint(a get request) i will send back hello world, i will give access to this request and response object (similar to fs gives us access to error and data object)

//* request - gives all things related to the request (it'll give body)
//* reposnse - when we want to send something back (res.send)

//! we can only send response once






















//! Making a Todo App using express


const express = require("express");

const app = express()

app.get("/", function(req, res){
    res.send("hello world");
})

app.listen(3000)