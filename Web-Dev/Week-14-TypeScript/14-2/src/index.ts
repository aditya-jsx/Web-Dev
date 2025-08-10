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