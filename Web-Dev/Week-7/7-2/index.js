//! Passwords and ZOD

//! Notes: - https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e




//! Hashing Password
//! Error Handling
//! Input Validation
//! Relationships in Mongo






//! using 7-1 code



//! 1.21) imoport the library
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();

const { UserModel, TodoModel } = require("./db");
const JWT_SECRET = "anything123";

app.use(express.json());



mongoose.connect("mongodb+srv://adityashrivastav567856:6NpjUZiLAt5AXzJt@cluster0.rimk0q5.mongodb.net/todo-app-database");





app.post("/signup", async (req, res)=>{

    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;

    //! 1.22) hashing the password before storing it in the DB, pass the password received from the user and the number of cycles(more cycles more difficult to process for hackers), either we use the callback function as third argument or we promisify it
    const hashedPassword = await bcrypt.hash(password, 10);


    //! 1.29) like this, and we need to run the below res.json only if no error is thrown, ugly way to do it is(using a variable and updating it) 
    let errorThrown = false;
    try{
        await UserModel.create({
        password: hashedPassword,
        name: name,
        email: email
    })
    }catch(e){
        res.status(403).json({
            message: "User with this email already exists"
        })
        errorThrown = true;
    }
    

    if(!errorThrown){
        res.json({
            message: "You are logged in"
        })
    }

})


app.post("/signin", async (req, res)=>{

    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })
    //! 1.25) we don't even need to check for the password in the DB, we can just the user from its email

    if(!user){
        res.json({
            message: "User does not exist"
        })
    }

    //! 1.23) now we have to bring the salt from the DB, and put it with original password, hash it again and compare it with the password present it in the DB, for doing this bcrypt provides us with a function (compare)
    const passwordMatch = bcrypt.compare(password, user.password);


    //! 1.24) now if the password is matched then the user is logged
    if(passwordMatch){
        const token = jwt.sign({
            id: user._id.toString()        
        }, JWT_SECRET)
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

})


async function Auth(req, res, next){
    const token = req.headers.token;

    const response = jwt.verify(token, JWT_SECRET);

    if(response){
        req.userId = response.userId;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect Data"
        })
    }

}


app.post("/todo", Auth, async (req, res)=>{
    const userId = req.userId;
    const description = req.body.description;
    const done = req.body.done;

    await TodoModel.create({
        description: description,
        done: done,
        userId: userId
    })

    res.json({
        message: "Todo Created"
    })

})


app.get("/todos", Auth, async (req, res)=>{
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    })

    res.json({
        todos
    })
})

app.listen(3000);




//! 1.1) we should never store the user's password in the plain text, we should always hash the passwords so that anyone can't see the passwords from the database if the DB is leaked.(not even exployees)

//! 1.2) hashing is a one way conversion, it is not encryption, anyone won't be able to convert it back to original(it cannot be easily converted, although it can be done if we use brute force a lot)

//! 1.3) when the user SignUps with their email and password, it should go to the backend and should be hashed before going to the DB, it should not store the plain text password in the DB

//! 1.4) but now if the user SignIns with their email and pass, then how do we compare their text password to the hashed password present in the DB, we'll hash this password again and then we'll compare this hash with hash present in the DB.

//! 1.5) now what if two people have same passwords, this means that theirs hashes will also be same, which will cause conflict when matching hashes, so we have to make sure that even if two people have same passwords then their hashes should be different.

//! 1.6) Salting:- it is when we put a random string after the password called salt, and now we'll convert this (password+salt) into hash, and will store this hash and the salt(it is stored in plain text) in the DB

//! 1.7) now even if a new user SignsUp with the same password then their salt will be different which will make the hashed password different, and we'll store this different password in hash in the DB and this new salt.

//! 1.8) now if the user signsIn with the username and password then the backend will bring the salt with that username, add the salt to the password, hash it and compare it with the hashed password present in the DB


//! 1.9) for password hashing we use bcrypt, popular for password hashing( look at 1.21 )





//! 1.26) now we have to use error handling in our code(try catch), what if we don't accept users with the same email or only allow unique emails(go to db.js)

//! 1.28) now if we run the server and login with same email our server will crash, for that we use error handling