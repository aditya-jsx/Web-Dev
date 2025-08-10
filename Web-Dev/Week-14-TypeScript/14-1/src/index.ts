//! TypeScript - it is a compiler based langusge with type safety, it first checks the code then converts it into a js file to run, it has also compile time errors which helps us to resolve errors more quickly.


//! Notes: -  https://projects.100xdevs.com/tracks/6SbPPXGkG8QKFOTW9BmL/ts-6



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


//? this here passed in parameters is what we do when we to give a function as an input to another function(if we are passing any arguments in that function then we have to pass them here as well)
//? instead of void we'll write the type that the another function is returning,in this case it's returning nothing so we wrote void.

// function one(fn: () => void){
//     setTimeout(fn, 1000);
// }

// one(function(){
//     console.log("hi there")
// })


//! done











//! tsconfig.js
//! we can convert our ts code to older js code for the browsers that don't support the modern ecmascript
//! we have a target file in tsconfig.js, after changing it to the required js version we can convert out ts code to that version's js code









//! now if we have different ts files then we compile these files, for every ts file we'll have a js file, and we don't want to put the js files in the github, because no dev wants to pull the js files as the compiler will make them, so we have to store the ts files and js files separately for that we change two things in out tsconfig.json, 

// - rootDir - for out ts files
// - dist - for out js files

//! we make two files, one is (src) to store our ts files and the other one is (dist) to store our js files.
//! this will store our ts files in src and our js output files in dist, sonow we can gitignore the dist folder


//! apart from the index.js we get some more outputs we can stop them by commenting these in the tsconfig.json

// Other Outputs
// "sourceMap": true,
// "declaration": true,
// "declarationMap": true,









//! to remove comments in out js file we can add removeComments in out tsconfig.json.









//! we have noImplicitAny, if we set it to false then the compiler will not throw any error if we don't give a type to a variable and sets to type any by default, but it'll still give a warning


























//! Interfaces


//! how can we give type to an object

// function greet(user: {
//     name: string,
//     age: number
// }){
//     console.log("hello", user.name, ". Your age is ", user.age);
// }

// greet({
//     name: "Aditya",
//     age: 22
// });


//! we can do this as well, it'll automatically infer the type of the user object
// let user = {
//     name: "Aditya",
//     age: 22
// }
//! and then we cna pass this user in to greet function as an argument



//! or we can define a new object as well, 

// let anything: {
//     name: string,
// } = {
//     name: "Dev"
// }
//! here even if we don't give the type of the keys here, it'll automatically infer that this is an object




//! a more complex object can written as

// const users: {
//     name:string,
//     age: number,
//     address: {
//         streetName: string,
//         country: string
//     }
// } = {
//     name: 'Aditya',
//     age: 22,
//     address: {
//         streetName: "Rohini",
//         country: "India"
//     }
// };

// console.log(users);






//! we can define the types alag se and then we can use them in out code

// interface UserType {
//     firstName: string,
//     lastName: string,
//     age: number,
// }

// function greet(user: UserType){
//     console.log("Hello", user.firstName);
// }

// greet({
//     firstName: "Aditya",
//     lastName: "Shrivastav",
//     age: 22
// })


















//! Types

//! very similar to interfaces but they let us do some other things as well,

// interface User {
//     name: string,
//     age: number
// }

// type UserType = {
//     name: string,
//     age: number
// }


//! we can make this object using both types and interfaces
// let user: UserType = {
//     name: "Aditya",
//     age: 22
// }









//! type give us something extra

//! it gives us union(we can select two types)

//! this is called (Unions)
// type StringOrNumber = string | number;

// function print(id: StringOrNumber){
//     console.log("ID:", id);
// }

//! we can pass both the things in this as it accepts both
// print(12);
// print("22");















//! Intersection

//! if we have two types, then we can make them one (this only happens by using types)

// type Employee = {
//     name: string,
//     date: Date
// }

// type Manager = {
//     name: string,
//     department: string
// }

//! here we are doing intersection
// type TeamLead = Employee & Manager;

//! we have to give all the keys to this otherwise the compiler will show an error, repeated keys will be used once
// const teamLead: TeamLead = {
//     name: "Aditya",
//     date: new Date(),
//     department: "IT"
// }

// console.log(teamLead);









//! now we can't do this in ts


// type S = string | number;

// function sum(a: S, b: S){
//     return a + b
// }

// now the compiler is showing error as TypeScript doesn't know at compile time whether a and b will both be numbers, both be strings, or a mix of both.

// so if we want to run a similar code we have to do this


// function add(a: S, b: S){
//     if(typeof a === "number" && typeof b === "number"){
//         return a + b
//     }
// }