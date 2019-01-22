var db = require("../models");
module.exports = function(app){

    app.get("/api/users", function(req, res){
        db.User.findAll({}).then(function(dbUser){
            res.json(dbUser);
        });
    });

    app.post("/api/users", function(req, res){
            console.log(req.body)
    
        db.User.create({
           name: req.body.name,
           email: req.body.email, 
        })
        .then(function(dbUser){
            res.send(dbUser);
        });
    })
    };