//! 1) here we'll import the mongoose library

const mongoose = require("mongoose");

//! 2) now we have to create a schema, (how our data looks like)(wireframe of our data)
//! 3) now why we need to define a schema even if mongodb is schema less, because we are using a schema library.
const Schema = mongoose.Schema;     //! 4) this exports a class called schema that we can use to define the schema of our application
const ObjectId = mongoose.ObjectId;     //! 7)


//! 5) making schema for both User and Todos(same like we created in the compass)
const User = new Schema({
    password: String,
    name: String,
    email: String,
})
//! 6.1) if we want to make sure that an email should be registered two times, then we'll use - email: {type: String, unique: true}


const Todo = new Schema({
    description: String,
    done: Boolean,
    userId: ObjectId,       //! 6.2) we have to import ObjectId to use it
})


//! 8) now we want something on which we can call functions in the backend, (it's called a data model).
//! we have to define on which model we want it in, and the schema for it
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

//! 9) this mongoose model lets us insert data in a specific collection with a specific schema
//! 10) now the db code is in a different file so we have to export it to use it in backend.

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}