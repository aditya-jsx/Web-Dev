//! Notes: - https://projects.100xdevs.com/tracks/ts-hard/ts-hard-1

import mini = require("zod/mini");


//! Pick - allows us to create a new type by selecting a set of properties (keys) from an existing type.

//! we can do this on either interface or type
// interface User  {
//     name: string;
//     age: number;
//     address: string;
//     email: string;
// }

//! now we to pick only the name and email form this type or interface
//! then we can

//! here also we can use both interface and types
// type UserProfile = Pick<User, 'name' | 'email'>;


//! for interface we have to do this
// interface UserProfile extends Pick<User, "name" | "email"> {}



// const displayProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name} and Email: ${user.email}`)
// }



//! using pick we can pick values from both types and interfaces




















//! Partial - makes all the properties of a type optional, creating a type with the same properties, but each marked as optional

// interface User  {
//     name: string;
//     age: number;
//     address: string;
//     email: string;
// }

// type UserProfile = Pick<User, 'name' | 'email'>;

// type updatePropsOptional = Partial<User>;
//! now we can get only the items that we want as we made all of them optional




















//! Readonly - suppose we have something stored in a const variable, and the typescript still let us update it

const a = [1, 2, 3]

a[0] = 4;
//! ts will not complain about this(ts lets us do this we are not changing (a), we are changing the values of a,  we are not changing the reference of (a), we are changing the internal values of a)
//! we can't do this with a string

//! we can solve this by using readonly

// type User = {
//     readonly name: string;
//     readonly age: number
// }

// const obj: User = {
//     name: 'Aditya',
//     age: 22
// }

// obj.name = 'Dev';
//! now this will show an error

//! now if we don't want to write readonly again and again then we can make the whole object readonly

// const newObj: Readonly<User> = {
//     name: 'contra',
//     age: 18,
// }
//! if we do this then we don't have to write the readonly in the type


//? uses - config.apiKey = 'newKey'; // Error: cannot assign to 'apiKey' because it is a read-only property.





















//! Record and Map

//! Records(it is a ts concept) let us give a cleaner type to objects

// interface User {
//     id: string;
//     name: string;
// };

// type Users = Record<string, User>;
//! this is a much cleaner syntax than this

// type newUser = { [key: string]: User }


// const obj: Users = {
//     "id1": {id: "01", name: "Aditya"},
//     "id2": {id: "02", name: "Contra"},
// };














//! Map(it is a js concept)
//! more preffererd than objects

//! can create a set of key value pairs

// const users = new Map();

// users.set("id-1", {name: "Aditya", age: 22, email: "something@gmail.com"});
// users.set("id-2", {name: "Contra", age: 18, email: "contra@gmail.com"});
// users.set("id-3", {name: "Dev", age: 10, email: "dev@gmail.com"});

// we can set on the map, we can get on the map, and we can delete on the map, using the methods respectively.



//! now when we are creating a map we can specify it's type

// type User = {
//     name: string;
//     age: number;
//     email: string;
// }


//! we can tell that the key should be a string and the type should be of User type that we defined above, (now if we the user don't give any particular information then the ts will complain and we can find errors easilty)
// const users = new Map<string, User>();

// users.set("id-1", {name: "Aditya", age: 22, email: "something@gmail.com"});
// users.set("id-2", {name: "Contra", age: 18, email: "contra@gmail.com"});
// users.set("id-3", {name: "Dev", age: 10, email: "dev@gmail.com"});
























//! Exclude - we can control the specific types that are to be passed

// type Event = "scroll" | "click" | "mousemove";

// type ExcludedEvent = Exclude<Event, 'scroll'>;

//! now the type ExcludedEvent will not contain 'scroll' event, it'll only contain 'click' and 'mousemove'

// const handleEvent = (event: ExcludedEvent) => {
//     console.log("Handling Event:", event);
// }

// handleEvent('click');       // this will not show any error, because it is not removed
// handleEvent('scroll');       // this will show an error, because it is removed




























//! Type Inference in Zod