console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("before cpu intensive task");

let c = 0;
for(let i = 0; i<100000; i++){
    c++;
}

console.log("After cpu intensive tASK");

console.log("Welcome to loupe.");