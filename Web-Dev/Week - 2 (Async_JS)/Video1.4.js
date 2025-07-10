// ! Asynchronous Code, Callbacks


const fs = require("fs");

// function print(err, data) {
//     console.log("This is the error");
//     console.log(err);
//     console.log("This is the data");
//     console.log(data);
// }

// const contenta = fs.readFile("aaa.txt", "utf-8", print);

// ? we are passing the print function as a callback to the readFile function.
// ? this will be called when the file is read.
// ? the callback function will be called with two arguments, the error and the data.
// ? the error will be null if there is no error, and the data will be printed.
// ? the data will be the content of the file.
// ? if there is an error then the error will be printed, and the data will be undefined.




// best practice is to use the async keyword
// ? this will make the code easier to read and understand.



// function print(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }


// const contenta = fs.readFile("a.txt", "utf-8", print); //* this is running asynchronously
// here one more thing to note, that we are passing only the name of the function, not the function itself, because we don't want to pass the value of the function, we only want to pass the operation to be performed.
// ! if we pass print(), then we are simply passing undefined to the readFile function as the print function is not returning anything so it is basically returning undefined which is counted as a string in js, so we are basically passing a string in place of a function, which will result in an error.













// ! NOW, if we write


function print(err, data) {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
}

const contenta = fs.readFile("a.txt", "utf-8", print);
const contentab = fs.readFile("b.txt", "utf-8", print);


console.log("Done!!");
// first this line will be executed, because logging this msg is far more easier than reading some content from a file, and then logging it.(it takes more time)
// both the readFile functions will be running asynchronously, and the first one to complete will log the data first.