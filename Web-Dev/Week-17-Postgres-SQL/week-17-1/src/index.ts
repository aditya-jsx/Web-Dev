// first we have to initialise the client like we used to do in mongoose

// import { Client } from "pg";

// const pgClient = new Client({
//     user: "neondb_owner",
//     database: "neondb",
//     port: 5432, // default port for postgres
//     host: "ep-floral-surf-a1cj1iip-pooler.ap-southeast-1.aws.neon.tech",
//     password: "npg_lLS7RZhxrWz6",
//     ssl: true
// })


//! this is an async function which takes some time to connect
// async function main(){
//     await pgClient.connect();

//     // now here we can run commands like we did in the sql editor
//     const response = await pgClient.query("SELECT * FROM users;");
//     console.log(response);
// }

// main();

















//! SQL Injection


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


app.post("/signup", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    //! this is how we can insert the user info in our db
    //! however adding user info or nay info like this in our db is not a good way as it can lead to sql injection
    //! which means the user can send me a well engineered password that can act as a sql query, and the user will be able to do changes to my db
    // const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${password}', '${email}');`
    
    //! we can see this by logging this query instead of passing it to db
    // console.log(insertQuery);
    
    //! the answer will be
    // INSERT INTO users (username, email, password) VALUES ('Aditya vbnShrivastavbvvvv', 'Adityafcgvhbvbhjn3000', '354678'); 
    // DELETE FROM users;  
    // INSERT INTO users (username, email, password) VALUES ('213456', '1234567', '234567');
    //! by this the user will be able to inject its sql into my db, and it can delete my whole data as this query will run in my sql instead of that i've written in the insertQuery
    
    
    // to protext our db from sql injecting we do this
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`

    //! these dollar signs will act as variables and we can set the values of these variables like this
    const response = await pgClient.query(insertQuery, [username, password, email]);
    //! now it'll work perfectly fine
    

    //! we also have to implement try and catch here if we don't want to break our server


    res.json({
        msg: "You have signed up"
    })
})


app.listen(3000);