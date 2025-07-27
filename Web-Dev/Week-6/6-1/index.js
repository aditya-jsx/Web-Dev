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


const express = require("express");
const app = express();

const users = [{
    userName: "aditya",
    password: "123123",
    token: "something"
}]

app.use(express.json());



//! function to generate a token
function generateToken(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}


app.get("/users", (req, res) => {
    res.json(users);
})




app.post("/signIn", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;


    for(let i = 0; i < users.length; i++){
        if(users[i].userName = userName){
            if(users[i].password = password){
                res.json({
                    msg: `Welcome ${userName}, your token is ${users[i].token}`,
                })
            }
        }else{
            res.status(411).json({
                msg: "invalid username or password",
            })
        }
    }
})



// app.post("", (req, res)=>{
//     const userName = req.body.userName;
//     const password = req.body.password;
// })





app.post("/signUp", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const token = generateToken();

    users.push({
        userName: userName,
        password: password,
        token: token,
    });

    res.json({
        msg: "user added",
    })


})


app.listen(3000)