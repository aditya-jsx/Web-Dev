//! creating an http server using express

// const express = require("express");

// const app = express();


// function sum(n){
//     let ans = 0;
//     for(let i = 0; i<=n; i++){
//         ans = ans + 1;
//     }
//     return ans;
// }


// // this slash means where we want to listen this, it also has a callback function which gets called whenever a person visits an address
// app.get("/", function(req, res){
//     // res.send("hi there");   // this means, any request that comes here, send hi there.

//     // this is how we take an input, in url it is like (http://localhost:3000/?n=3) to pass something
//     const n = req.query.n;
//     const ans = sum(n);

//     // res.send(ans);`
//     res.send("hi your ans is " + ans);
// })

// app.listen(3000);

//! req and res stands for request and response respectively.















//! 1) building a hospital like program

const express = require("express");

const app = express();


// storing users in a variable
const users = [{
    name: "John",
    kidneys: [{
        healthy: false,
    }]
}];


//! 10) we'll use this one line of code
app.use(express.json());



// for get request we use query parameters, one used above
app.get("/", function(req, res){

    //! 2) here we have to write the logic for the kidneys of john
    // total number of kidneys
    // const numberOfTotalKidneys = users[0].kidneys.length;

    // for number of healthy kidneys
    // let numberOfHealthyKidneys = 0;
    // for(let i = 0; i <= users[0].kidneys.length ; i++){
    //     if(users[0].kidneys.healthy == true){
    //         numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    //     }
    // }

    // for number of unhealthy kidneys
    // const numberOfUnHealthyKidneys = numberOfTotalKidneys - numberOfHealthyKidneys;

    //! 3) giving response
    // res.json({
    //     numberOfTotalKidneys,
    //     numberOfHealthyKidneys,
    //     numberOfUnHealthyKidneys
    // })
    




    //! 2.2) same code using filters 

    const johnKidneys = users[0].kidneys;


    // total kidneys
    const numberOfTotalKidneys = johnKidneys.length;


    // healthy kidneys
    // const healthyKidneys = johnKidneys.filter(h => h == true);   //! this line was causing the problem as we are comparing an object with the boolean

    const healthyKidneys = johnKidneys.filter(kidney => kidney.healthy === true);
    const numberOfHealthyKidneys = healthyKidneys.length;



    // unhealthy kidneys
    const numberOfUnhealthyKidneys = numberOfTotalKidneys - numberOfHealthyKidneys;

    //! 3.2) giving response
    res.json({
        numberOfTotalKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})


//! 4) now for second endpoint


// for post requests we send data in the body(just another space where we can specify that this is out input)
app.post("/", function(req, res){

    //! 5) how to get the body here
    const isHealthy = req.body.isHealthy;

    //! 6) add a new kidney
    users[0].kidneys.push({
        healthy: isHealthy 
        // this will update the value of kidneys
    }) 

    res.json({
        msg: "Done!!"
    })

    //! 7) now how to send post requests -> use Postman
    // always restart after changing the code

    //! 8) after sending the request it'll show an error that (cannot read the property of undefined), where undefined is req.body, in case of get request req.query was working but req.body is not.
    //! 9) to solve this we have to write one line of code(after understanding middlewars we won't have to do that)
    // app.use(express.json())



    //! 11) worked
    //! we are writing isHealthy: true, in the postman body because we are catching (isHealthy) here, this determines whether a healthy or unhealthy kidney will be added.

    //! 12) we can send multiple post requests and they will keep on adding in the database(actual database, right now we are using our local storage) and they will also be updated in the memory, and will be reflected in the app.
    //! by this method, multiple people can change the db

})


//! 13) for user to change the unhealthy kidney with a healthy one
app.put("/", function(req, res){
    // const changeHealth = req.body.changeHealth;

    // if(users[0].kidneys[0].healthy = false){
    //     users[0].kidneys[0].healthy = true;
    //     res.json({
    //         msg: "kidney replaced"
    //     })
    // }else{
    //     res.json({
    //         msg: "already healthy"
    //     })
    // }


    // for(let i = 0; i < users[0].kidneys.length; i++){
    //     users[0].kidneys[i].healthy = true;
    // }
    // res.json({});




    //! 14) checking each kidney whether it is healthy or not, replacing the unhelathy ones with the healty ones
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy === false){
            users[0].kidneys[i].healthy = true;
        }  
    }
    res.json({
        msg: "kidneys replaced"
    });






    // if we dont send a res.json then the request will be hung and the postman wouldn't know that the request has ended

})




//! 15) to delete unhealthy kidneys

app.delete("/", function(req, res){
    // const isHealthy = req.body.isHealthy;

    users[0].kidneys = users[0].kidneys.filter(k => k.healthy);     //! already checking for true
    // users[0].kidneys = users[0].kidneys.filter(k => k.healthy === true);   //! explicitly stated to check for true
    //! both lines does the same job


    //! instead of doing this we can make a new empty array and then we can filter the healthy ones and push them into thst new array and then assign the previos users[0].kidneys array to this new one.
    // users[0].kidneys = newArray    for demo only.(this is not a part of actual code written here)


    res.json({
        msg: "unhealthy kidneys removed"
    });


    
})



//! 16) now what if someone sends the wrong request then the postman will show error and the user could be able to see some other, which is not right so we have to return some status codes like 411 which stands for wrong input.




















app.listen(3000);