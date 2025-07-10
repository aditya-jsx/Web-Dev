//! Async and Await

// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises.




//! this is called defining ouw own asynchronous function, a function which returns a promise

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     })
// }

// //! syntactic sugar
// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("HI");
//     await setTimeoutPromisified(3000);
//     console.log("Hello");
//     await setTimeoutPromisified(5000);
//     console.log("hello there");
// }

// solve();

// console.log("At the end");


//? we've done the same thing that we did in promise chaining but here the syntax is even more readable than promise chaining, under the hood this is still a promise, as we know that asyn and await is a syntactical sugar on top of promises.


//? it looks like the execution of code stops at an await and then it waits for some duration and then executes the next line of code like as an synchronous operation but NO, there is an asynchronius operation going under the hood, as async await uses promises under the hood, so the console at the end will be printed first than the solve funtion, because we know that async operations are done in the end.

















//! resolbe and reject

const fs = require("fs");

function readfileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFileSync("a.txt", "utf-8", function(error, data){
            if(error){
                reject("File not found");
            }else{
                resolve(data);
                // console.log(contents);
            }
        })
    })
}


readfileAsync().then(function(x){
    console.log("File has been read" + x)
}).catch(function(e){
    console.log(e);
})