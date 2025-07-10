// ! Assignment - 1

// ? Write a function that takes a user as an input and greets them with their name and age.

// const user = {
//     name: "Aditya",
//     age: 21
// }

// function greeting(user){
//     console.log("Hello " + user.name + ", " + "your age is " + user.age + ".");
// }

// greeting(user);





// ! Assignment - 2

// ? Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// const user = {
//     name: "Aditya",
//     age: 21, 
//     gender: "Male"
// }

// var greet = "";

// if(user.gender=="Male"){
//     greet = "Mr.";
// }
// else if(user.gender=="Female"){
//     greet = "Mrs.";
// }
// else if(user.gender=="Others"){
//     greet = "Others.";
// };


// function greeting(user){
//     console.log(`Hi ${greet} ${user.name}, your age is ${user.age}.`);
// };

// greeting(user);










// ! Assignment - 3

// ? Also tell the user if they are legal to vote or not


// const user = {
//     name: "Aditya",
//     age: 17, 
//     gender: "Male"
// }

// var greet = "";

// if(user.gender=="Male"){
//     greet = "Mr.";
// }
// else if(user.gender=="Female"){
//     greet = "Mrs.";
// }
// else if(user.gender=="Others"){
//     greet = "Others.";
// };


// function greeting(user){
//     console.log(`Hi ${greet} ${user.name}, your age is ${user.age}.`);
//     if(user.age >= 18){
//         console.log("You are eligible to vote.");
//     }
//     else{
//         console.log("You can't vote.");
//     }
// };

// greeting(user);







// ! Assignment - 4

// ? Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

// const numbers = [1, 34, 56, 44, 35, 78, 99, 69];

// var evenNumbers = numbers.filter(evennum);

// function evennum(numbers) {
//     return numbers % 2 == 0;
// }

// console.log(evenNumbers);

// filters in js:- https://www.w3schools.com/jsref/jsref_filter.asp











// ! Assignment - 5

// ? Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// var users = [{
//     name: "Aditya",
//     age: 21
// }, {
//     name: "Manan",
//     age: 6
// }, {
//     name: "Dev",
//     age: 18
// }];


// const checkAge = (users) => {
//     return users.age >= 18;
// }

// var adultusers = users.filter(checkAge);

// console.log(adultusers);

// * while using arrow functions we can't access a variable before initialisation, but while using normal functions we can use a variable before initialisation.
















// ! Assignment - 6

// ? Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male.


var users = [{
    name: "Aditya",
    age: 21,
    gender: "male"
}, {
    name: "Manan",
    age: 19,
    gender: "female"
}, {
    name: "Dev",
    age: 18,
    gender: "male"
}];

const checkAge = (users) => {
    return users.age >= 18 && users.gender == "male";
}

var adultusers = users.filter(checkAge);

console.log(adultusers);