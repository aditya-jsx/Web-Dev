//! Read schema.prisma file first

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

//! 1) this is how we create an instance of the prisma to use in our application like we used to do with mongoose


//! 2) now this is how we can create a new entry in the DB
// client.user.create({
//     data: {
//         username: "Aditya",
//         password: "Testing@3003",
//         age: "21",
//         city: "Delhi"
//     }
// })
//! 3) creating entries like this is much more easier than this
// client.query(`INSERT INTO user (username, password, age, city) VALUES ('Aditya', 'Testing@3003', '21', 'Delhi')`);







//! 4) now let's put this into an async function
// async function createUser(){
//     await client.user.create({
//         data: {
//             username: "Aditya",
//             password: "Testing@3003",
//             age: "21",
//             city: "Delhi"
//         }
//     })
// }

// createUser();
//! 5) remove the output from the generator client in schema.prisma to make sure the client files(@prisma/client) are build in node modules folder, otherwise it'll throw an error in importing.



//! 6) now how do we delete

// async function createUser(){
//     await client.user.delete({
//         where: {
//             id: 1
//         }
//     })
// }

// createUser();

//! Done



//! 7) how do we update a user(make sure there is a user entry in the db)

// async function createUser(){
//     await client.user.update({
//         where: {
//             id: 2
//         },
//         data: {
//             username: "Contra"
//         }
//     })
// }

// createUser();

//! Done


//! Now how do we read a table,
// find() - if we want all the entries with the given property
// findFirst() - if we want only one entry with the given property

//! if we want only username then after the where key we can pass the select key with username: true, so now it'll return us the username


























//! Relationships 

// Prisma lets us define relationships to relate tables with each other


//! go the schema.prisma for the relations

//! now what's the benefit of relations
//! we can include the todos with the user as well, means we can import the todos of the users as well, but here one thing to notice that we are using findFirst function which will return us ONLY the FIRST user whose id is 2, but it'll return us all the todos related to that user no just the first todo

// async function createUser(){
//     const user = await client.user.findFirst({
//         where: {
//             id: 2
//         },
//         include: {
//             todos: true
//         }
//     })
    
//     console.log(user)
// }

// createUser();



//! Task - find a way to get the raw query that the prisma is sending to the postgres, to know how this prisma logic is getting converted under the hood.


















//! Expressify the Prisma
//! this is how we use prisma in an express application

// import express from "express";

// const app = express();

// app.use(express.json());



// app.get("/users", async (req, res) => {
//     const users = await client.user.findFirst();

//     res.json({users});
// })

// app.get("/todos/:id", async (req, res) => {
//     const id = req.params.id;

//     const todos = await client.user.findMany({
//         where: {
//             id: Number(id)
//         },
//         select: {
//             todos: true,
//             username: true,
//             city: true
//         }
//     })

//     res.json({todos});
// })

// app.listen(3000);