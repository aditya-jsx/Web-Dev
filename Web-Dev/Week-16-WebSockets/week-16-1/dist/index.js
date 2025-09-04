"use strict";
// Notes - https://petal-estimate-4e9.notion.site/WebSockets-1477dfd10735802982becc925074b5f0
Object.defineProperty(exports, "__esModule", { value: true });
//! Web Sockets 
//! there are many websocket libraries, one of them is ws
//! npm install ws @types/ws
//! now we can make different types of ws servers, by making express and es in the same server, or many more as given in the notes, but here we are using a purely ws server
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
``;
// this is an event handler which tells that whenever a conncted is made give me the socket of that person, (socket means a connection to that person), this is in place of req and res, here we only have socket because we can send things and receive things
// wss.on("connection", function (socket){
//     console.log("User Connected");
//     socket.send("hello");
// })
//! until now, we've inported a ws server, created a web socket server, and created a handler so that whenever there is a connection the control reaches the handler
//! now we'll run this server and access it through the postman
// now we can make it fancier
// wss.on("connection", function (socket){
//     console.log("User Connected");
//     setInterval(()=>{
//         socket.send("Current price of eth is: " + Math.random());
//     }, 1000)
// })
//! now we've seen that how the server can send us messages
//! now how a client can send messages to a server
//! for doing this we have to receive the msgs from the client on the socket level
// wss.on("connection", function (socket){
//     console.log("User Connected");
//     setInterval(()=>{
//         socket.send("Current price of eth is: " + Math.random());
//     }, 1000)
//     socket.on("message", (e) => {
//         console.log(e.toString());
//         //! this will convert the buffer received into a string format
//     })
// })
//! now let's create a sinple ping pong application , where whenever we send the ping text to the server it sends us a pong msg
wss.on("connection", function (socket) {
    console.log("User Connected");
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//! now lets create a frontend for it
