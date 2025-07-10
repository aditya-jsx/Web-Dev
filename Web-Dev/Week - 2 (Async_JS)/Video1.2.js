// ! reading an external file and logging it's content.


// const fs = require("fs");
// ? fs stands for file system which is an object that allows us to read and write files from our system.
// ? we have to import this external library to run it.
// ? fs.readFileSync() is a function that reads the contents of a file and returns it as a string.



// const contents = fs.readFileSync("a.txt", "utf-8"); // used to read the contents from a file
// ? utf-8 is a standard of representing english language characters, if we don't use utf-8 here then it will give output in a code.(it is human readable)

// console.log(contents);













// ! reading two external files and logging their content.


// const fs = require("fs");


// const contenta = fs.readFileSync("a.txt", "utf-8"); // used to read the contents from a file
// const contentb = fs.readFileSync("b.txt", "utf-8"); // used to read the contents from a file
// console.log(contenta);
// console.log(contentb);









// ! fs gives us two types of functions to read files.
// fs.readFile() is a function that reads the contents of a file and returns it as a string. (Synchronously)
// fs.readFileSync() is a function that reads the contents of a file and returns it as a string. (Asynchronously)

// const contenta = fs.readFile("a.txt", "utf-8");
// ? this will read file asynchronously 

// const contentb = fs.readFileSync("b.txt", "utf-8");
// ? this will read file synchronously