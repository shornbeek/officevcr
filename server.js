const express = require("express");
const app = express();
const mysql = require("mysql");
const mysql2 = require("mysql2");
const sequelize = require("sequelize");
const db = require("./models");
const server = require("http").createServer(app);
const io = require("socket.io")(server);


var msgs = [];
var curentUsers = [];
var currentRooms = [];


const PORT = process.env.PORT || 8080;
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function() {
  server.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
  });
});


io.on("connection", (socket) => {
  console.log("User Connected");
  socket.emit("listUsers", curentUsers);
  socket.emit("messages", msgs);
  socket.on("message", (msg)=>{
    console.log('message: ' + msg);
    msgs.push(msg);
    io.emit("message", msg);
  });
  socket.on("stream", (image)=> {
    // if(image ===null){
    //   socket.emit("stream", )
    // }
    socket.broadcast.emit("stream", image);
   
  });
  socket.on("addUser", (user)=> {
    curentUsers.push(user);
    console.log(curentUsers);
    io.emit("listUsers", curentUsers);
  });
  socket.on("disconnect", ()=>{
    var i = curentUsers.indexOf(socket);
    curentUsers.splice(i, 1);
    io.emit("listUsers", curentUsers);
  });

});

