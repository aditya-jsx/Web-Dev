//! Try and Catch

//! whenever we know that the any line of code can throw an error then we put it inside the try block, and the next code that we want to run in the catch block

try{
// the code that will probably throw an error
}catch(e){
// the code that we want to get executed even if the previous code fails
}

// if the code written inside the try will show error then the command will reach the catch block and start executing the code written there

try{
    let a;
    console.log(a.length);
    console.log("hi from try");
}catch(e){
    console.log("hi from catch");
}

//! the code written inside the catch will run as the try code will throw an error as can't get the length of undefined.