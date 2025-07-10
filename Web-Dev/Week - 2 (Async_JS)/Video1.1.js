// ^ try to crete a promisified version of setTimeout, fetch and fs.readFile. 












// ! Find sum from 1 to a number


function sum(num){
    let ans = 0;
    for(let i = 0; i <= num; i++){
        ans = ans + i;
    }
    return ans;
}

console.log(sum(4));