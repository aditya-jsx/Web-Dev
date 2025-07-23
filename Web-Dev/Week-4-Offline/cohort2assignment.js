//! cohort 2 assignment



/*
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */




const { error } = require("console");
const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");


app.use(express.json());



//! 
const FILES_DIR = path.join(__dirname, "files");
//! dirname means current location directory name
// path.join is used to join the current path of the directory(where the script is running) __dirname AND the folder named files
// basically it join the current path to the folder named files





app.get("/files", function(req, res){

    // fs.readFile("a.txt", function(err, data){
    //     res.json({
    //         msg: data.toString(),
    //     })
    // })

    //! to read files present in the directory


    //! readdir is used to read the content of a specified directory.
    fs.readdir(FILES_DIR, (err, data)=>{
        if(err){
            res.status(404).json({
                error: "can't read files directory",
            })
        }else{
            res.status(200).json(data)
        }
    })

})







//! GET /file/:filename - Returns content of given file by name

app.get("/files/:filename", function(req, res){

    const filePath = path.join(__dirname, "/files/", req.params.filename);

    fs.readFile(filePath, "utf8", (err, data)=>{
        if(err){
            res.status(404).json({
                error: "file not found",
            })
        }else{
            res.status(200).json(data);
        }
    })
})
// finally it is done, route was file but http request was files.










// app.post("/", function(req, res){

// })






// app.put("/", function(req, res){

// })






// app.delete("/", function(req, res){

// })




app.listen(3000);