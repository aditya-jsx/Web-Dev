//! Notes: - https://petal-estimate-4e9.notion.site/Node-js-Bun-and-JS-runtimes-a09a41ccd61c4f498e55750c9a1c9b34


//! we use __dirname to get the path to the directory, and we use path.join to print the directories, and it even solves going back in a directory

// const path = require("path");

// console.log(__dirname)
// console.log(path.join("g:/", "../../index.js", "/projects"))







//! External Packages: -

//! whenever we add an external package to our project then it gets added locally in package.json file in the dependencies section

//! we don't have to upload the node modules of our project as the json file contains all the dependencies that we are using we just have to install the node modules in our machine and the needed files will be automatically downloaded, 
//! all these dependencies are libraries that keeps on getting better and better, that's why they have verions.

//? the 3 sections are major.minor.patch

// major - for big changes (significant updates)
// minor - for small changes (addition of a new feature or update)
// patch - for day to day changes (fixing some bugs)


//! for getting the newer version again we use the sign (^), it brings the newer version everytime, otherwise it'll bring the exact version


//! now it is possible that different people working on same project could be using different version that can cause (different people, different code problems), that's why we have package-lock.json
//? this files pins a version to that project, suppose you wanted ^5.1.2, i.e., anything greater than 5.1.2, but the pinned value is 5.3.0, so whenever a developer does npm install then it'll automatically download the pinned version
//? lock means we are locking various versions

//~ should we upload package-lock.json file on the github or not? 
//~ Yes, we should always upload the package-lock.json file so that everyone gets the same versions of libraries installed in their systems that are present on the server



























//! Making our own CLI (command line interface)
//! Assignment - 1 
// library to use :- https://www.npmjs.com/package/commander



// const fs = require("fs");
// const { Command } = require("commander");

// const program = new Command;


// program
// .name('count')
// .description('CLI to do file based tasks')
// .version('0.8.0');

// program.command('count_lines')
// .description('count the number of lines in file')
// .argument('<file>', 'file to count')
// .action((file)=>{
//     fs.readFile(file, "utf8", (err, data) => {
//         if(err){
//             console.log(err)
//         }else{
//             const lines = data.split("\n").length;
//             console.log(`There are ${lines} lines in ${file} file`);
//         }
//     });
// });

// program.command('count_words')

// .description('count the number of words in file')
// .argument('<file>', 'file to count')
// .action((file) => {
//     fs.readFile(file, "utf-8", (err, data) => {
//         if(err){
//             console.log("No such file found..")
//         }else{
//             const words = data.split(" ").length;
//             console.log(`There are ${words} words in ${file}`);
//         }
//     })
// })

// program.parse();


//! this is the command that we use in the terminal to run this
//? node index.js count_lines a.txt



//! make another command count the number of words -----> Doneee
//? node index.js count_words a.txt










//! Assignment - 2

//~ Create a `cli` that lets a user

//~ 1. Add a todo
//~ 2. Delete a todo
//~ 3. Mark a todo as done

//~ Store all the data in files (todos.json)



const fs = require("fs");
const { Command } = require("commander");

const program = new Command;


program
.name('count')
.description('CLI to do file based tasks')
.version('0.8.0');

program.command('count_lines')
.description('count the number of lines in file')
.argument('<file>', 'file to count')
.action((file)=>{
    fs.readFile(file, "utf8", (err, data) => {
        if(err){
            console.log(err)
        }else{
            const lines = data.split("\n").length;
            console.log(`There are ${lines} lines in ${file} file`);
        }
    });
});

program.command('count_words')

.description('count the number of words in file')
.argument('<file>', 'file to count')
.action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err){
            console.log("No such file found..")
        }else{
            const words = data.split(" ").length;
            console.log(`There are ${words} words in ${file}`);
        }
    })
})

program.parse();






























// Extra - You can't use a hook inside a function, (it can only be used if that function itself is a hook)

// in next js we can load things on the server