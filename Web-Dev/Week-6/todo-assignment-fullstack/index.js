const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomJWT"

app.use(express.static("./Public"))
app.use(express.json());

const users = [];


function Auth(req, res, next){
    const token = req.headers.token;

    if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded)=>{
            if(err){
                res.status(411).json({
                    msg: "Unauthorized"
                })
            }else{
                req.user = decoded;
                next()
            }
        })
    }else{
        res.status(411).json({
            msg: "Unauthorized"
        })
    }
}


app.post("/signUp", (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "user Added"
    })

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
    })

    if(user){
        const token = jwt.sign({
            username: username,
        }, JWT_SECRET);
        user.token = token;
        res.json({
            token: token,
        })
    }else{
        res.status(411).json({
            msg: "Invalid id or pass"
        })
    }

})


// app.post("/addTodo", (req, res)=>{

// })



app.listen(3000);