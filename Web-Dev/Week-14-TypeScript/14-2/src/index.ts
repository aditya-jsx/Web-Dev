//! Notes :- https://projects.100xdevs.com/tracks/6SbPPXGkG8QKFOTW9BmL/ts-6


// we can also give the return type of the function

// function sum(a: number, b: number): number{
//     return a + b
// }

// console.log(sum(2, 3));




//! we use interfaces when we have to make complex objects

// interface User {
//     name: string,
//     age: number,
//     address: {
//         streetName: string,
//         houseNumber: number,
//         country: string
//     }
// }

//! interfaces are used to define our own custom types

//! we can define this user object without giving the interface but if we give it one, then we have give it all the keys, otherwise it'll show that some properties are missing
// let user: User = {
//     name: 'Aditya',
//     age: 22,
//     address: {
//         streetName: "Rohini",
//         houseNumber: 2,
//         country: "India",
//     }
// }

// console.log(user);


//! and now we can use this in a function



//! here this function will take a user as an input which will be of interface User(defined above), and the return type of this function is a boolean
// function isLegal(user: User): boolean{
//     return user.age>=18
// }

// console.log(isLegal(user));














//! now that if we want to make some keys optional(i.e., we don't want to use them in our object)
//! UGLY WAY OF DOING IT
// interface User {
//     name: string,
//     age: number,
//     address? : undefined | {
//         streetName: string,
//         houseNumber: number,
//         country: string
//     }
// }




//! but we have to do this in the object as well
// let user: User = {
//     name: "Aditya",
//     age: 22,
//     address: undefined
// }











//! Optional Parameters

//! now that if we want to make some keys optional(i.e., we don't want to use them in our object)
//! then we add a question mark in front of them

// interface User {
//     name: string,
//     age: number,
//     address? : {
//         streetName: string,
//         houseNumber: number,
//         country: string
//     }
// }


// let user: User = {
//     name: 'Dev',
//     age: 22
// }
//? now here even if I don't give the address keys, it'll not throw an error as it depends on us that whether we want to define the address key or not.






//! now what if in address key i want to write country only, 
//! for the present code i can't write ONLY coountry in it, if i define the address key, i have to define all the properties inside it, if I want to use a specific property then I have to make it optional too
// interface User {
//     name: string,
//     age: number,
//     address? : {
//         streetName? : string,
//         houseNumber? : number,
//         country? : string
//     }
// }
//! now even if we deinfe the address, we don't have to define all the properties, if we want a property to be compulsory of address is defined, then we can remove the optional mark from it.
















//! Interfaces using other Interfaces

//! now lets suppose we have 2 interfaces, one for the user and the other can be for the Office

// interface User {
//     name: string,
//     age: number,
//     address? : {
//         streetName? : string,
//         houseNumber? : number,
//         country? : string
//     }
// }

// interface Office {
//     address? : {
//         streetName? : string,
//         houseNumber? : number,
//         country? : string
//     }    
// }
//! but here we are repeating ourselves, 
//! The interfaces can use interfaces
//! and we can create a third interface called address which can be use used in both the user and office interface


// interface Address {
//     streetName: string,
//     houseNumber: number,
//     country: string
// }


// interface User {
//     name: string,
//     age: number,
//     address : Address
// }

// interface Office {
//     address : Address
// }



















//! Implementing Interfaces

//! we can implement interfaces as a class.

// interface People {
//     name: string,
//     age: number,
//     greet: ()=>string
// }
//! the last one is a function which does not take anything as a input returns a string


// let person1: People = {
//     name: "Contra",
//     age: 22,
//     greet: ()=>{
//         return "Hello " + person1.name
//     }
// }

// const greeting = person1.greet();
// console.log(greeting);









//! NOW, we can create a class using interface and we can also make objects using interfaces like we did above

// interface People {
//     name: string;
//     age: number;
//     // greet: ()=>string
//     //! 5 now what is the benefit of using classes than object, we can make functions here, that we can define here, without putting the implementation
//     isLegal: () => boolean;

// }


//! now lets create the class that implements this interface

//! 1 this should have all the properties of People, (it can have extra things, but the properties of the interface are must)
// class Manager implements People{
//     name: string;
//     age: number;
//     number: number;
//     // 3 we can give extra things

//     //! 6 and we can put the implementation here
//     isLegal() {
//         return this.age > 18
//     };


//     //! 4 so now whenever we make a new object of this class then whatever we pass in that object, the name and age will be assigned to that object,

//     constructor(name:  string, age: number){
//         this.name = name;
//         this.age = age;
//         this.number = 56789876;
//     }
// }

//! 2
// let user = new Manager("Adam", 30);
// console.log(user.isLegal());

 






//! IMPORTANT -
//! What is the difference between iterfaces and types
//! so the difference between the interfaces and types are, we can implement interfaces as classes, but not in types.
//! types let us do unions and intersections, interfaces doesn't let us do unions and intersections













//! Abstract Classes

//! IMPORTANT - next followup question - what is difference between abstract classes and interface
//! in abstract classes we have default implementations that we can't do in interfaces(like hello function) 

// abstract class User {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }

//     abstract greet(): string;

//     hello(){
//         return "Hi"
//     }
// }

// class Employee extends User {
//     name: string;
//     constructor(name: string){
//         super(name);
//         this.name = name;
//     }
//     greet(){
//         return "Hello"
//     }

// }
//! whenever we create the object of this employee class, we can call the hello function.
























//! Types
//! types let us aggregate data together

//! 1) the first difference is how we initialise it

// interface User1 {
//     name: string;
//     age: number;
// }

// type User2 = {
//     name: string;
//     age: number;
// }



//! 2) we can't implement a type in a class






//! 3) types let us do unions and intersections


//! Union (a union can have either some or all the properties)

// type goodUser = {
//     name: string;
//     gift: string;
// }

// type badUser = {
//     name: string;
//     ip: string;
// }

// type User = goodUser | badUser;


// let user1: User = {
//     name: "Aditya",
//     gift: "vnieradfsdnvev",
//     ip: "newofn"
// }
//! it'll work even if we give either one property from gift and ip or give both the properties(gift and ip)










//! Intersection

// type Employee = {
//     name: string;
//     startDate: string;
// }

// type Manager = {
//     name: string;
//     department: string;
// }

// type TeamLead = Employee  & Manager;

// let employee1: Employee = {
//     name: "Dev",
//     startDate: "30-03-2003"
// }

// let manager1: Manager = {
//     name: "Aditya",
//     department: "IT"
// }

// let teamLead1: TeamLead = {
//     name: "Contra",
//     startDate: "30-03-2003",
//     department: "Sales"
// }























//! Create two types called User and Admin
//! Create a function that takes either a User or Admin as an input, and returns a string saying "Welcome, [name]"

// interface Admin {
//     name: string; 
//     permissions: string;
// }

// interface User {
//     name: string;
//     age: number;
// }


//! 1) either we can do this
// function greet(user: User | Admin){

// }



//! 2) or we can do this

// type UserOrAdmin = User | Admin;

// function greet(user: UserOrAdmin){
//     console.log("Welcome", user.name);
//     //! now here we can't call age or permission, as we don't know which interface it'll be using, so it can only take the property which is common
// }

// greet({
//     name:"Aditya",
//     age: 22,
// })


//! unions can be done like this also

// interface User {
//     age: number | string;
// }
























//! Arrays in TypeScript

//! how can we give arrays as a type

//! suppose we have to make a function to find a specific number in an array

//! now array is of type number so we'll do this nums: number[]
// function max(nums: number[]){
//     let maxValue = 3333;

//     for(let i =0; i<nums.length; i++){
//         if(nums[i] > maxValue){
//             maxValue = nums[i]            
//         }
//     }
//     return maxValue;
// }

// console.log(max([1, 2, 34, 45]));











//! another example

// interface Users {
//     firstName: string;
//     secondName: string;
//     age: number;
// }


// function filterUsers(users: Users[]){
//     let ans: Users[] = [];   

//     for(let i = 0; i<users.length; i++){
//         const user = users[i];
//         if(user && user.age > 18){
//             ans.push(user);
//         }
//     }

//     return ans;
// }

// const filteredUsers = filterUsers([{
//     firstName: "Aditya",
//     secondName: "Shrivastav",
//     age: 22
// }])

// console.log(filteredUsers);











//! we can say that
// interface one {
//     name: string;
// }

// interface Two {
//     age: number;
// }

// but if we want to do union or intersection then we have to use type
//! we can do this

// type Third = one & Two;

//! but not this

// interface Fourth = one & Two












//! IMPORTANT
// ! Question - 

//! suppose there are two types

// type Rectangle = {
//     x: number;
//     y: number;
// }

// type Name = {
//     name: string;
// }

//! what will come in out mind if we do -> Rectangle & Name
//! like this

// type Third = Rectangle & Name;

//! we'll say that if we make an object from the third type then it'll have the properties of both Rectangle and Name.

// const shape: Third = {
//     x: 12,
//     y: 34,
//     name: "Quardrilateral"
// }

//! but isn't this what we call a union?? ---- having both properties, because in intersection we should have either Rectangle or Name.

//! Think of types as a set of values(it isn't only x and y), along with x and y it can have some more properties as typescript uses open types, that means any possible value with property x and y and infinitely many other properties is also part of the Rect.


//! same goes for the other type Name, it could also have so many different properties but there will be a set where along with name, the propertes x and y also exists,
//! and in the Rectangle type, there will be a set in which along with x and y, the property name also exists.

//! so that's why the intersection includes all the properties form both the types.


//! DAAAAYYYUUUUMMMMMMMMMMMMMMMM