// ! Classes : way to define blueprints for objects.
// ! Constructor: function that is called when an object is created.
// ! Prototype: object that is shared by all the objects created from the same class.

// class Person{
//     constructor(name, age, favSport){
//         this.name = name;
//         this.age = age;
//         this.favSport = favSport;
//     }

//     sayHi(){
//         console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
//     }

//     Hobby(){
//         console.log(`My fav sport is ${this.favSport}.`);
//     }

// }



// const Person1 = new Person("Aditya", 22, "Volleyball");
// Person1.sayHi();
// Person1.Hobby();

// const Person2 = new Person("Dev", 22, "Basketball");
// Person2.sayHi();
// Person2.Hobby();


// * ---------------------------------------------------------------------------------------------------


// class Circle{
//     constructor(radius, color){
//         this.radius = radius;
//         this.color = color;
//     }

//     area(){
//         const area =  Math.PI * this.radius * this.radius;
//         return area;
//     }

//     paint(){
//         console.log(`The color of the circle is ${this.color}`);
//     }
// }


// const Circle1 = new Circle(2, "red");
// const area1 = Circle1.area();
// console.log(area1);
// Circle1.paint();

// const Circle2 = new Circle(21, "blue");
// const area2 = Circle2.area();
// console.log(area2);
// Circle2.paint();

// * ------------------------------------------------------------------------------------------------



// class Shape{
//     constructor(color){
//         this.color = color;
//     }

//     paint(){
//         const color = `Painting with ${this.color} color`;
//         return color;
//     }

//     area(){
//         throw new Error("The area method must be implemented in the subclass");
//     }

//     getDescription(){
//         console.log(`A shape with color ${this.color}`);
//     }
// }


// class Rectangle extends Shape{
//     constructor(height, width, color){
//         super(color);
//         this.height = height;
//         this.width = width;
//     }

//     area(){
//         const area = this.height * this.width;
//         return area;
//     }

//     getDescription(){
//         const desciption = `A rectangle with height ${this.height}, width ${this.width}, and color ${this.color}`;
//         return desciption;
//     }
// }

// class Circle extends Shape{
//     constructor(radius, color){
//         super(color);
//         this.radius = radius;
//     }

//     area(){
//         const area = Math.PI * this.radius * this.radius;
//         return area;
//     }

//     getDescription(){
//         const desciption = `A circle with Radius ${this.radius} and color ${this.color}`;
//         return desciption;
//     }
// }


// const circle1 = new Circle(2, "red");
// const areaOfCircle1 = circle1.area();
// console.log(areaOfCircle1);
// console.log(circle1.paint());
// console.log(circle1.getDescription());


// const rectangle1 = new Rectangle(2, 3, "blue");
// const areaOfRectangle1 = rectangle1.area();
// console.log(areaOfRectangle1);
// console.log(rectangle1.paint());
// console.log(rectangle1.getDescription());




// * ---------------------------------------------------------------------------------------------------


//! For Date 

// const now = new Date(); // Current date and time
// console.log(now.toISOString()); // Outputs the date in ISO format



//! Map

// const map = new Map();

// map.set('name', 'Alice');
// map.set('age', 30);
// map.set('hobby', 'Music')

// const firstName = map.get('name');
// console.log(firstName);

// console.log(map.get('age'));
// console.log(map.get('hobby'));




// ? these classes are given to us by javascript and we are making an instance of it using 'new' keyword.





// * ----------------------------------------------------------------------------------------------------


// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
  
// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);
// ! this is a better way of calling function, it is syntactically cleaner.
// ! this is the callback approach, basically another way of calling a function instead of using the call back approach.


// setTimeoutPromisified(3000).then(callback); // object of promise class.

// this will log me "Promise { <pending> }", because this is an object of Promise class that will remain pending for 3 secs.






// * ------------------------------------------------------------------------------------------------------------

// ? callback approach 

// function main(){
//     console.log("main is called");
// }

// setTimeout(main, 3000);


// ? promisified approach


// function setPromisified(){
//     return new Promise(waitFor3S);
//     // promise says that whenever the first argument of the function that you passed in me is called, i will call the function that you passed in ".then"

//     // matlab promise ke andar jo waitfor3s pass kiya h, us waitfor3s function ka jab first argument call hoga tab promise wo function call krega jo humne ".then" me pass kr rakha hoga.
// }

// function waitFor3S(resolve){
//     setTimeout(resolve, 3000);
// }

// ! if we use our own function instead of calling resolve, then the promise will not be completed and the main function will never be called, so if we want to do both we have to call the resolve after setTimeout.
// function waitFor3S(resolve){
//     setTimeout(function(){
//         console.log("inside the wait for 3s")
//     }, 3000);
//     resolve();
// }

// function main(){
//     console.log("main is called");
// }


// setPromisified().then(main);



/*

1) setPromisified() is called → it returns a Promise.

2) waitFor3S is passed to that Promise and sets a 3-second timer using setTimeout.

3) After 3 seconds, resolve() is called → the Promise is resolved.

4).then(main) runs → main() is executed and logs "main is called".

*/ 



// * ------------------------------------------------------------------------------------------------------------




// ! Better and short code for the above


function setPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));   // inside Promise we are passing a callback function.
}

function main(){
    console.log("inside main")
}

setPromisified(2000).then(main);



// * ------------------------------------------------------------------------------------------------------------
