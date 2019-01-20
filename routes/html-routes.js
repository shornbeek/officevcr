
module.exports = function(app){
const path = require("path");
const express = require("express");

    // app.get("/", (req,res)=>{
    //     res.send("Test");
    // });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/main.html"));
    });
    app.get("/conference", function(req, res){
        res.sendFile(path.join(__dirname, "../public/conference.html"));
    });
    app.get("/guest", function(req, res){
        res.sendFile(path.join(__dirname, "../public/guest.html"));
    });
    // app.get("/api/users", function(req, res){
    //    return res.json();
    // })
}

// app.get("/guest/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       console.log(dbPost);
//       res.json(dbPost);
//     });
//   });

