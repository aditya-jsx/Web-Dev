// Assignment

// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2


//! Ans -

//! without callback hell


// function ThreeDone(){
//     console.log("hello there");
// }

// function twoDone(){
//     console.log("hello");
//     setTimeout(ThreeDone, 5000);
// }

// function oneDone(){
//     console.log("hi");
//     setTimeout(twoDone, 3000);
// }

// setTimeout(oneDone, 1000);




//! using callback hell



// setTimeout(function(){
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hello there");
//         }, 5000)
//     }, 3000)
// }, 1000)





// ? to remove callback hell, we use PROMISE CHAINING

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}


setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("Hello there");
        })
    })
})

//! how this works:- we made a function that returns a new promise with duration as an arguement, now in the next code we called that function which again returns that function with a duration that we need.


//? this syntax code looks more promising in the terms of readability.
//? in js we can chain function calls