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

//! and now if we try to create a address without any relation to the user table, and if we try to create a address table with no user table then it'll throw an error



import { Client } from "pg";

const pgClient = new Client({
    user: "neondb_owner",
    database: "neondb",
    port: 5432, // default port for postgres
    host: "ep-floral-surf-a1cj1iip-pooler.ap-southeast-1.aws.neon.tech",
    password: "npg_lLS7RZhxrWz6",
    ssl: true
})


//! this is an async function which takes some time to connect
async function main(){
    await pgClient.connect();

    // console.log(response);
}

main();