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




















//! Readonly - 