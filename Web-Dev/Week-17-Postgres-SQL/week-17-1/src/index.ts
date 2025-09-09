// first we have to initialise the client like we used to do in mongoose

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

    // now here we can run commands like we did in the sql editor
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response);
}

main();
