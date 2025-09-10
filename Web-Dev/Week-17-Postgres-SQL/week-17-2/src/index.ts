//! Relationships and Transactions


//! like we did relationships in mongo, here also we can create relationships when we need to create more than one table, think of a todo app, where we've stored users in a table and their todos in a different table then we have to make a relation between the two tables so that we can access the todos of a particular user,

//! for doing this we'll define a schema like this


// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE addresses (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     street VARCHAR(255) NOT NULL,
//     pincode VARCHAR(20),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );

//! this foreign key property at the end is what we need to establish a relationship between the user table and the address table, it create a relation of the userId with the id present in the users table,

//! ON DELETE CASCADE - tells us that if we delete the user, then all the address tables related to that user gets deleted.
//! now if we want to make it strict then we can do, ON DELETE RESTRICT - then it'll make us delete the address of a user first, then it'll let us delete the user.

//! and now if we try to create a address without any relation to the user table, or if we try to create a address table with no user table then it'll throw an error

//! Error: -
// insert or update on table "addresses" violates foreign key constraint "addresses_user_id_fkey"



//! and to add something in addresses we can do
// INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ('2', 'Delhi', 'India', 'Q', '110086');








//! lets do the signup logic to understand how we give the userid to the addresses table.

// import  express  from "express";
// import { Client } from "pg";

// const app = express();
// app.use(express.json());
// const pgClient = new Client({
//     user: "neondb_owner",
//     database: "neondb",
//     port: 5432, // default port for postgres
//     host: "ep-floral-surf-a1cj1iip-pooler.ap-southeast-1.aws.neon.tech",
//     password: "npg_lLS7RZhxrWz6",
//     ssl: true
// })

// pgClient.connect();


// app.post("/signup", async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const email = req.body.email;
//     const city = req.body.city;
//     const country = req.body.country;
//     const street = req.body.street;
//     const pincode = req.body.pincode;
    

//     //! 1) to make sure we add the user_id of the user in the addresses table we have to extract the id by returning the id from the table using RETURNING keyword

//     const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
//     const response = await pgClient.query(insertQuery, [username, email, password]);

//     //! 2) logging the response to see how it returns id
//     // console.log(response);

//     // we got the id in response.rows[0].id

//     //! 3) storing the id in a variable
//     const userId = response.rows[0].id;

//     //! 4) now storing the address info in the addresses table with userId
//     const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`
//     const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);

    

//     res.json({
//         msg: "You have signed up"
//     })
// })


// app.listen(3000);











//! TRANSACTIONS :-



//! now using this approach can create a problem as what if,
//! the after inserting the data in the user table, our backend crashes, then it'll not be able to put data in the addresses table

//! to get rid of this problem, we use TRANSACTIONS
//! here either both the things will happen, or nothing happens.

//! in SQL query, instead of adding data like before we do this,

// BEGIN;

// INSERT INTO users (username, password, email) VALUES ('Aditya', 'aditya@123', 'aditya@gmail.com');

// INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ('Delhi', 'India', 'Q', '110086'. '2');

// COMMIT;


//! now the sql knows that this is a transaction if either of the 2 queries fails then the other one is reverted



//! lets do this in nodejs


// import  express  from "express";
// import { Client } from "pg";

// const app = express();
// app.use(express.json());
// const pgClient = new Client({
//     user: "neondb_owner",
//     database: "neondb",
//     port: 5432, // default port for postgres
//     host: "ep-floral-surf-a1cj1iip-pooler.ap-southeast-1.aws.neon.tech",
//     password: "npg_lLS7RZhxrWz6",
//     ssl: true
// })

// pgClient.connect();


// app.post("/signup", async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const email = req.body.email;
//     const city = req.body.city;
//     const country = req.body.country;
//     const street = req.body.street;
//     const pincode = req.body.pincode;


//     //! we'll wrap and rearrange our queries into begin and commit

//     const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
//     const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id;`
    
//     await pgClient.query(`BEGIN;`)

//     const response = await pgClient.query(insertQuery, [username, email, password]);
//     const userId = response.rows[0].id;
//     const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);

//     await pgClient.query(`COMMIT;`)



//     //! now to understand if we put a setTimeout in between these two queries and crash the backend before the setTimeout completes then there will no entry in either of the tables.

//     res.json({
//         msg: "You have signed up"
//     })
// })


// app.listen(3000);






































//! Joins :-

//! 1) suppose we want to get some metadata of the user, for that we have to get the user information as well as the addresses information
//! 2) the ugly way to do this is sending two SELECT queries to get the data from the users table and the addresses table


import  express  from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());
const pgClient = new Client({
    user: "neondb_owner",
    database: "neondb",
    port: 5432, // default port for postgres
    host: "ep-floral-surf-a1cj1iip-pooler.ap-southeast-1.aws.neon.tech",
    password: "npg_lLS7RZhxrWz6",
    ssl: true
})

pgClient.connect();


app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
    const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id;`
    
    await pgClient.query(`BEGIN;`)

    const response = await pgClient.query(insertQuery, [username, email, password]);
    const userId = response.rows[0].id;
    const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);

    await pgClient.query(`COMMIT;`)

    res.json({
        msg: "You have signed up"
    })
})

//! 3) this is the ugly way, as suppose we sent the first query to get the users information and then we sent the second query to get the addresses information, but after sending the first query the addresses infortmation changes so we can get inconsistent information.

// app.get("/metadata", async (req, res) => {
//     const id = req.query.id;

//     const query1 = `SELECT username, email FROM users WHERE id=$1`;
//     const response1 = await pgClient.query(query1, [id]);


//     const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
//     const response2 = await pgClient.query(query2, [id]);

//     res.json({
//         user: response1.rows[0],
//         addresses: response2.rows
//     })
// })


//! 4) to get rid of this we can use JOINS

//! 5) query syntax

// SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// JOIN addresses ON users.id = addresses.user_id
// WHERE users.id = '1';


//! 6) nodejs syntax

app.get("/metadata", async (req, res) => {
    const id = req.query.id;

    const query1 = `
        SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
        FROM users JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1
    `;

    //! 7) here we are first selecting the properties that we want to display and then we are joining the users table with the addresses table by using the JOIN keyword with users.id equals to addresses.user_id, and then giving the users.id of the user that we want to fetch the data of.

    const response1 = await pgClient.query(query1, [id]);

    return res.json({
        user: response1.rows
        // here we are giving all the rows as we want to give all the data and each data is stored in a row
    })
})

//? Now sometimes we prefer doing two queries instead of using joins, as joins are very expensive, 
//? as if there are two tables with 20 entries each then if we try to join them it'll become 20*20=40 entries which becomes very expensive and takes a lot of time


app.listen(3000);

















//! Types of Joins
// look in notes