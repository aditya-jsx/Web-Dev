// ! setTimeout():- it takes two arguments, one is a callback function and the other is the time in milliseconds.
// ! it delats the execution of the code for the given time.





function print(){
    console.log("This is the callback function");
}

setTimeout(print, 2000);
//? it is a asynchronous function, so it will not execute the message immediately, it will execute it after the given time.
//? giving time here means that after that given time it'll be pushed to the callback queue, but will only be executed when the callstack is empty.


console.log("This is the main code"); 