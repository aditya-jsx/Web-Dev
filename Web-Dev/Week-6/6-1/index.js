//! Http deep dive

//! Authenticaltion
// the process of letting users sign in or sign out in out website


//! what we'll learn 
//! 1) Auth Basics
//! 2) JWT (JSON Web Tokens)
//! 3) Authorizations Headers
//! 4) Creating your auth middleware
//! 5) localstorage 







//! 1)

//! what is an auth,
// suppose we are going to the facebook, and we want our information, so we give them our id and password
// based on this they identify us and return us our information
// facebook checks for our id and password in it's database and then matches it with what we gave it,
// if it's true then it returns a token which is stored in our browser, now this token is used by the browser to send requests and through this token facebook recognises us and returns us our information

//! 1. The user comes to your website (courses.com)
//! 2. The user sends a request to `/signin` with their `username` and `password`
//! 3. The user gets back a `token`
//! 4. In every subsequent request, the user sends the token to identify itself to the backend.


// const express = require("express");
// const app = express();

// const users = [];

// app.use(express.json());



// //! function to generate a token
// function generateToken(length = 32) {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let token = '';
//   for (let i = 0; i < length; i++) {
//     token += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return token;
// }


// app.get("/users", (req, res) => {
//     res.json(users);
// })



// app.post("/signIn", (req, res) => {
//     const userName = req.body.userName;
//     const password = req.body.password;


//     // for(let i = 0; i < users.length; i++){
//     //     if(users[i].userName = userName){
//     //         if(users[i].password = password){
//     //             res.json({
//     //                 msg: `Welcome ${userName}, your token is ${users[i].token}`,
//     //             })
//     //         }
//     //     }else{
//     //         res.status(411).json({
//     //             msg: "invalid username or password",
//     //         })
//     //     }
//     // }


//     for(let i = 0; i < users.length; i++){
//         if(users[i].userName === userName && users[i].password === password){
//             res.json({
//                 msg: `Welcome ${userName}, your token is ${users[i].token}`
//             })
//         }
//     }

// })





// app.post("/signUp", (req, res) => {
//     const userName = req.body.userName;
//     const password = req.body.password;
//     const token = generateToken();


//     //! one more thing, here we can write the conditions for the password.
//     //! this can also be done by using input validations by zod

//     users.push({
//         userName: userName,
//         password: password,
//         token: token,
//     });

//     res.json({
//         msg: "user added",
//     })


// })


// app.listen(3000)














//! Used harkirat's code for signIn, mine was a little bit fucked

// const express = require("express");
// const app = express();

// const users = [];

// app.use(express.json());



//! function to generate a token
// function generateToken(length = 32) {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let token = '';
//   for (let i = 0; i < length; i++) {
//     token += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return token;
// }


// app.get("/users", (req, res) => {
//     res.json(users);
// })



// app.post("/signUp", (req, res) => {
//     const userName = req.body.userName;
//     const password = req.body.password;


//     users.push({
//         userName: userName,
//         password: password,
//     });

//     res.json({
//         msg: "user added",
//     })
// })


// app.post("/signIn", (req, res) => {
//     const userName = req.body.userName;
//     const password = req.body.password;

//     //! checking if the user is present in the db or not
//     const user = users.find(function(u){
//         if(u.userName == userName && u.password == password){
//             return true;
//         }else{
//             return false;
//         }
//     })

//     //! if present then giving token to it
//     if(user){
//         const token = generateToken();
//         user.token = token;
//         res.json({
//             msg: token
//         })
//     }else{
//         req.status(403).json({
//             msg: "Invalid id or pass"
//         })
//     }    
// })

//! it's finally working 


//! creating an authenticated EP
//! 3) Authorization Headers
// app.get("/me", (req, res)=>{
//     const token = req.headers.token;
//     const user = users.find(function(u){
//         if(u.token == token){
//             return true;
//         }else{
//             return false;
//         }
        
//     })
//     if(user){
//         res.json({
//             userName: user.userName,
//             passsword: user.password
//         })
//     }else{
//         res.json({
//             msg: "token invalid"
//         })
//     }
// })



// app.listen(3000)













//! 2) JWTs

//! using stateful tokens we have to store these tokens in a database, like we are string now in a vairable.
//! The Problem is we have to keep hitting the database everytime the 

//? The Solution is JWTs
// they contain all the data to aithenticate a request, so the server don't need to store anything.


//! so how it works :- 
//! 1) suppose we have a frontend, a backend, and a database
//! 2) first we signup, request from FE goes to BE to put our Id and Pass in the DB(db is hit), and we get a msg that we've signed up
//! 3) then we signIn, a request from the FE goes to BE to check our Id and Pass and look for it in the DB(db is hit), if it's present then we are given a JWT which contains our decrypted userName
//! 4) now we don't need to hit the DB to authenticate the user(we can see that by looking at the jwt), but to get the files or info, we have to hit the DB





const express = require("express");
const app = express();

//! 2) create a jwt(a key used to creating a jwt, assigning a jwt)
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomjwt";



const users = [];

app.use(express.json());


//! 1) function to generate a token (we'll use jwt instead of this)
// function generateToken(length = 32) {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let token = '';
//   for (let i = 0; i < length; i++) {
//     token += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return token;
// }


app.get("/users", (req, res) => {
    res.json(users);
})



app.post("/signUp", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;


    users.push({
        userName: userName,
        password: password,
    });

    res.json({
        msg: "user added",
    })
})


app.post("/signIn", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    //! checking if the user is present in the db or not
    const user = users.find(function(u){
        if(u.userName == userName && u.password == password){
            return true;
        }else{
            return false;
        }
    })

    // ! if present then giving token to it (old method)
    // if(user){
    //     const token = generateToken();
    //     user.token = token;
    //     res.json({
    //         msg: token
    //     })
    // }else{
    //     req.status(403).json({
    //         msg: "Invalid id or pass"
    //     })
    // }    


    //! 4) previously we were calling a function (now we'll convert their username over to a jwt)
    if(user){
        const token = jwt.sign({        //! this create the token (we can encrypt as well but signing is better) - 1
            userName: userName,
        }, JWT_SECRET);     //! the secret that we are using to sign this particular token     
        user.token = token;
        res.json({
            msg: token
        })
    }else{
        req.status(403).json({
            msg: "Invalid id or pass"
        })
    }   
})


app.get("/me", (req, res)=>{

    //! 5) the user will still send a token but now it'll send a jwt token, how to find it in the local database
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);      // converting the jwt into username
    const userName = decodedInfo.userName;

    const user = users.find(function(u){
        if(u.token == token){
            return true;
        }else{
            return false;
        }
        
    })
    if(user){
        res.json({
            userName: user.userName,
            passsword: user.password
        })
    }else{
        res.json({
            msg: "token invalid"
        })
    }
})


//! 6) jwt decoding happens at the backend


app.listen(3000)