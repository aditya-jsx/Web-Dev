//! to create a schema we have a syntax like this

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );







//! TO CREATE a new table in the DB we have, 

// INSERT INTO users(username, email, password) VALUES ('Contra', 'contra@gmai.com', 'contra0101');






//! now we want to update a field in the data, the syntax for doing it

// UPDATE users
// SET password = 'new_password'
// WHERE email = 'aditya@gmail.com';

//! we can do this directly by doing changes in the DB or we can use the above syntax







//! we can make it more complex like this

// UPDATE users
// SET password = 'new_password', username = 'ADITYA'
// WHERE email = 'aditya@gmail.com' AND username = 'Aditya';

//! can update more than one things in a row and can add more checks in the WHERE








//! to DELETE 

// DELETE FROM users
// WHERE id = 1;

// it'll delete the row with id 1

//! if we do DELETE FROM users - it'll delete the whole database






// to read
// SELECT * FROM users;
//! this will read the whole users table

// if we want to read a specific row then we'll add the WHERE syntax