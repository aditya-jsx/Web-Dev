"use strict";
//! Notes :- https://projects.100xdevs.com/tracks/6SbPPXGkG8QKFOTW9BmL/ts-6
Object.defineProperty(exports, "__esModule", { value: true });
function filterUsers(users) {
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user && user.age > 18) {
            ans.push(user);
        }
    }
    return ans;
}
const filteredUsers = filterUsers([{
        firstName: "Aditya",
        secondName: "Shrivastav",
        age: 22
    }]);
console.log(filteredUsers);
