// ! Functional Arguments
// here we can pass a function as an argument to another function.


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(a, b, operation) {
    return operation(a, b);
    // ? here the 3rd argument is a function which does the operation.
}

console.log(calculate(10, 5, multiply));
// ? we are giving the 3rd argument the operation function we need to perform.