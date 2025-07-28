//! Connecting Frontend To Backend


//! -> how the website sends token in every request
//! in jwt we don't encrypt and decrypt, we encode and decode

//! IMP --> after endcoding, we can either decode the original payload without the secret       OR     we can verify the token with the secret.


//! in case of encryption you need the original key if you want to get back the original string, jwts are different, you don't encrypt, you encode the original string to some format and anyone can convert it back to the original string


//! now verification is different, it is checking that was i the person who created it in the first place using the secret, anyone can decode but if you want to verify you need the secret 


//! Summary ->> JWTs can be decoded by anyone, JWTs can be verified only by the person who issued it (using JWT secret).














//! coding the whole auth again using JWTs


const express = require("express");
const app = express();

app.use(express.json())

const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomJWT";

const users = [];

app.post("/signUp", (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "user added",
    })

    //! the problem here is we are not checking that whether a user with this username is present or not
    //! and we are pushing this data into out in memory array, we should use a DB

})



app.post("/signIn", (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }else{
            return false;
        }
    });

    if(user){
        const token = jwt.sign({        // creating a token from the username
            username: username,
        }, JWT_SECRET);
        user.token = token;
        res.json({
            msg: token,
        });
    }else{
        res.status(411).json({
            msg: "Invalid id or pass"
        })
    }

})

//! here the user will send a token to the backend, to get his info(whatever he wants)

app.post("/me", (req, res)=>{

    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);      // verifying the token using secret
    const username = decodedInfo.username;

    const user = users.find(function(u){        // checking if the token provided in the signIn is same to the token given by the user in request
        if(u.token == token){
            return true;
        }else{
            return false;
        }
    })

    if(user){
        res.json({
            username: user.username,
            password: user.password,
        })
    }else{
        res.status(411).json({
            msg: "invalid token"
        })
    }


})





app.listen(3000);