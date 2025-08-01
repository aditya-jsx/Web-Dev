//! Databases (NoSQL databases)

//! --> MongoDB

//! NOTES: - https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e

//! databases are where we store our data, we don't store it in the server, because if a server is down then we'll lost all of our data.

//! databases are a organized collections of data that are stuructured to enable effiecient storage, retrieval, and management of information.(these are peristed state, a server that stays there hopefully forever)

//! most of the times we should stick to sql dbs but there are some points where no sql dbs shine, 

//! when dealing with a variety of data models(folder in folder in folder), nosql dbs shine.


//! Schema - structure of our data, how it looks in the database
//! mongodb is schema less, we don't have to define what type is our data
//! so it is better for unstructured dbs.


//! mongodb scale horizontally easily, just have to keep increasing compute, just have to keep increasing the number of servers.



//! suppose we make a lot of apps tomorrow, then we don't have to make different clusters for different apps, in a single mongodb cluster we can store our different apps dbs







//! now we'll create the backend of a todo application and for data storage we'll use mongodb






const express = require("express");
const app = express();

//! 4) this is how we import some shit in js
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "anything123";

app.use(express.json());



//! 11) now if we run this file and test it using postman then the request will be hung as we didn't connected our db
mongoose.connect("mongodb+srv://adityashrivastav567856:6NpjUZiLAt5AXzJt@cluster0.rimk0q5.mongodb.net/todo-app-database");
//! 12) one more thing that we need to write the name of our collection in the end and if we write a different name then it'll cerate a new collection






//! 5) now we'll write the code for the signup endpoint
app.post("/signup", async (req, res)=>{

    const password = req.body.password;
    const name = req.body.username;
    const email = req.body.email;

    //! 6) now inserting these values in the db
    //! 7) now the request here goes to the db located on a server so this should be a await call, as we don't know much time it'll take to update the db, and we can't say to the user that you are logged in without getting the proper info(we'll use async await)
    await UserModel.insert({
        password: password,
        name: name,
        email: email
    })


    re.json({
        message: "You are logged in"
    })

})


//! 8) have to check whether the user is present on the database or not
app.post("/login", async (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    //!9) now we have to find the user in the db(now one thing to make sure that this create returns a promise, as it'll go to the db and return the user, it's an asynchronous call)
    const user = await UserModel.create({
        email: email,
        password: password
    })

    // console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()        //! 10) because users are defined by these ids, each user has a diff id(we are creating a token using user's id) -> also converting object in to string
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

    const response = jwt.verify("token", JWT_SECRET);

    if(response){
        req.userId = token.id;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect Data"
        })
    }


    // const user = await UserModel.findOne({name: "Aditya"});

    // if(user){
    //     jwt.verify("token", JWT_SECRET);
    //     next();
    // }else{
    //     res.status(404).json({
    //         message: "user not found"
    //     })
    // }
}


//! 1) these two last requests are authenticated, only if a user is logged in then only, he'll be able to post a todo or get todos.
app.post("/todo", Auth, (req, res)=>{
    const userId = req.userId;
    const description = req.body.description;
    const done = req.body.done;

    TodoModel.create({
        description: description,
        done: done
    })

    res.json({
        userId: userId
    })

})


app.get("/todos", Auth, async (req, res)=>{
    const userId = req.userId;

    const user = await TodoModel.find({
        userId: userId
    })

    res.json({
        userId: userId
    })
})

app.listen(3000);


//! done with mongo(almost) , learn zod

//! 2) now for database we'll create a new file, db.js(go to the file)

