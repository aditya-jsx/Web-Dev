//! Create an HTTP Server

//! It should have 4 routes

//! 1. http://localhost:3000/multiply?a=1&b=2
//! 2. http://localhost:3000/add?a=1&b=2
//! 3. http://localhost:3000/divide?a=1&b=2
//! 4. http://localhost:3000/subtract?a=1&b=2

//! Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

//! The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)





// const express = require("express");

// const app = express();


// function sum(a, b){
//     const sum = a + b;
//     return sum;
// }

// function multiply(a, b){
//     const product = a*b;
//     return product;
// }

// function divide(a, b){  
//     const quotient = a/b;
//     return quotient;
// }

// function subtract(a, b){
//     const ans = a - b;
//     return ans;
// }


// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json((sum(a, b)))
// });

// app.get("/multiply", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json(multiply(a, b))
// });

// app.get("/divide", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json(divide(a, b))
// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json(subtract(a, b))
// });

// app.listen(3000);



//! Working




//! now the next task is how can we make the users give value like this
//! http://localhost:3000/multiply/1/2



//? we can do this by passing routes like this "/sum/:a/:b"


const express = require("express");

const app = express();


function sum(a, b){
    const sum = a + b;
    return sum;
}

function multiply(a, b){
    const product = a*b;
    return product;
}

function divide(a, b){  
    const quotient = a/b;
    return quotient;
}

function subtract(a, b){
    const ans = a - b;
    return ans;
}





//! 2) by using params instead of query



app.get("/sum/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    // we are using parseInt so that they don't become strings, as when we add strings it'll be             "1" + "2" = "12", and we don't want this

    res.json((sum(a, b)))
});

app.get("/multiply", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json(multiply(a, b))
});

app.get("/divide", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json(divide(a, b))
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json(subtract(a, b))
});

app.listen(3000);