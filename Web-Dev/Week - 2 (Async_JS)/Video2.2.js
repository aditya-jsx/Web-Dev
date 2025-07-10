//! changing Callback hell to simple code


/* 

Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2

*/


// ? first using call back hell


// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hello there");
//         }, 5000);
//     }, 3000);
// }, 1000);





// ? without callback hell


// function stepThree(){
//     console.log("Hello There");
// }

// function stepTwo(){
//     console.log("Hello");
//     setTimeout(stepThree, 5000);
// }

// function stepOne(){
//     console.log("Hi");
//     setTimeout(stepTwo, 3000);
// }

// setTimeout(stepOne, 1000);








// ! Promisifed Version



// ? using callback hell

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("Hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("Hello There");
//         })
//     })
// })




// ? without callback hell

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


// function stepOne(){
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(stepTwo)
// }

// function stepTwo(){
//     console.log("Hello");
//     setTimeoutPromisified(5000).then(stepThree)
// }

// function stepThree(){
//     console.log("Hello There");
// }


// setTimeoutPromisified(1000).then(stepOne);







// ? we can also do this


// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }



// setTimeoutPromisified(1000).then(function(){
//     console.log("Hi");
//     return setTimeoutPromisified(3000);
// })
// .then(function(){
//     console.log("Hello");
//     return setTimeoutPromisified(5000);
// })
// .then(function(){
//     return console.log("Hello There");
// })




// ! lets break down how a promise works



// function resolvePromise(resolve){ // ? 4) here this resolve is also a function, and when this resolve is called then the function passed inside the first .then is called.

//     setTimeout(resolve, 2000); // ? 5) here the resolve function is called after 2 secs, so the promise will be resolved after 2 secs then the function inside the first .then is called.
// };

// let p = new Promise(resolvePromise);
// ~ 1) here we are making a new instance or object of the promise class, and the funtion that we've passed in this Promise is reponsible for resolving this promise, 

// ~ 2) this resolvePromise function will tell us when this promise will be resolved.
// ~ 3) when this promise is resolved then it'll execute the function that is called in the first .then


// function callback(){
//     console.log("first .then is passed");
// };

// p.then(callback);










// * -------------------------------------------------------------------------------------------




// ! Promisified versions of readFile


// const fs = require("fs");


// function readFile(){
//     // read the contents of the file and return it.
//     return new Promise(readTheFile);
// }


// function readTheFile(sendHereTheValue){

//     fs.readFile("a.txt", "utf-8", function(err, data){
//         sendHereTheValue(data);
//     })
// }

// function callback(contents){
//     console.log(contents)
// }

// const p = readFile();

// p.then(callback);








// ! data flow of this code


// const fs = require("fs");


// console.log("------code starts------")

// function readFile(){
//     console.log("readFile is called")
//     return new Promise(setTimeoutPromisified);
// }


// function setTimeoutPromisified(resolve){
//     console.log("setTimeoutPromisified is called");
//     setTimeout(function(){
//         console.log("callback based settimeout completed");
//         resolve();
//     }, 3000);
// }

// function callback(){
//     console.log("timer is done")
// }

// const p = readFile();

// p.then(callback);


// console.log("------code ends------");








// ! making our own promise class and using it to do the same


// class Promise2 {
//     constructor(fn){
//         this.fn = fn;
//         this.fn(() => {
//             this.resolve();
//         })
//     }

//     then(callback){
//         this.resolve = callback;
//     }
// }

// function readThatFile(resolve){
//     console.log("setTimeout is called");
//     setTimeout(function(){
//         console.log("setTimeout is done");
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified(){
//     return new Promise2(readThatFile);
// }

// function callback(){
//     console.log("callback function is called");
// }

// const p = setTimeoutPromisified();

// p.then(callback);


// ? whatever we pass in callback takes the place of resolve and then it is passed.