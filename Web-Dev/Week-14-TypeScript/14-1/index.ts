//! TypeScript - it is a compiler based langusge with type safety, it first checks the code then converts it into a js file to run, it has also compile time errors which helps us to resolve errors more quickly.

//! ts - typescript compiler takes typescript code and spits out js code
//! there are other compilers as well like esbuild, swc



//! ti locally run typescript we can first start run a nodejs project then we can to make ts.config.json and we can run a command to do it -->>   npx tsc --init

//! we don't need typescipt on production so we can do ( npm install --dev typescript )


//! after runing that command, tsconfig.json will be created which contains out ts config, we can tell TS compiler how we want to compile our code, we can tell what we want to compile what we want to ignore etc etc...




//! ok so now we are in the ts file

//! let's write some JS code in it, and then add some ts syntax in it.

// let x: number = 10;  
//! now even if we don't write this number then also it'll infer that its type is a number due to type inferencing, but sometimes it don't infer then we have to give it a explicit type
//! we can't run this straight so we need to convert it into js first using a compiler

//! install the compiler (npx tsc -b) - this is ts compiler build
//! now we'll see a index.js file which will hold our js converted whole code
//! now if we run this js file then we're good to go

//! now if we make some error here like this
// x = "Aditya"
// ! and then we delete the index.js file and then we re run the npx tsc -b it'll show us an error.

//! but the js file will still be made, and if we want to not make the index.js in case of compile time error then in the tsconfig.js we add ("noEmitOnError": true) - this will stop creating a new js file for compile time errors.


//! now if we want to accept two types in a single variable then we do
// let y: number | string = 10;

//! now this is the high level benefit of typescript it lets you catch errors in compile time.


// console.log(x)




















//! Now typeScript provides us some basic types like -  number, string, boolean, null, undefined



//! problem - 1
//! make a funciton that takes an argument as an inputs and prints it


//! if we don't give the type then it'll show an error that it is implicitly 'any' type.(matlab by default this is 'any',)
//! 'any' is a type in ts which means that variable can be anything, and it'll now throw an error when we pass anything in it, but we have to make it any by ourself, can't leave it to be 'any' by default
//! but we can make it explicitly 'any' like ( name:any )
// function printName(name:string){     
//     console.log("Hello ", name);
// }

// printName("Aditya");

//! done





//! problem - 2
//! make a sum function and thing to learn is how to assign a return type to a function

//! here the type of the ans because ts is infering the type of parameters, that the sum of two numbers will obviously be a number(this is known as type inferencing)

// function sum(a:number, b:number){
//     return a+b
// }

// console.log(sum(1, 2));

//! done



//! problem - 3
//! return true or false based on if a user is 18+

// function isLegal(age: number){
//     if(age>18){
//         return true
//     }
//     return false
// }

// console.log(isLegal(19));

//! done





//! problem - 4
//! Create a function that takes another function as input, and runs it after 1 second.


//? this here passed in parameters is what we do when we to give a function as an input to another function(if we are passing any arguments then we have to pass them here  as well)
// function one(fn: () => void){
//     setTimeout(fn, 1000);
// }

// one(function(){
//     console.log("hi there")
// })


//! done