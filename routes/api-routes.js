var db = require("../models");
module.exports = (app) => {
    // app.get("/api/all", function (req, res) {
    //     member.getAll(function (data) {
    //         res.json(data);
    //     });
    // });

    // // Add a member
    // app.post("/api/new", function (req, res) {
    //     member.addMember(req.body, function () {
    //         res.end();
    //     });
    // });
    // Get all members
    app.get("/api/all", function (req, res) {


        User.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });

    });

    // Add a Member
    app.post("/api/new", function (req, res) {

        console.log("User Data:");
        console.log(req.body);

       User.create({
            name: req.body.name,
            email: req.body.email,

        }).then(function (results) {
            // `results` here would be the newly created member
            res.end();
        });

    });

    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {
        console.log(req.body)

        db.User.create({
            name: req.body.name,
            email: req.body.email,
        })
            .then(function (dbUser) {
                res.send(dbUser);
            });
    });

    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    app.post("/api/users", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            // comments: req.body.comments
        }).then(function (dbTodo) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbTodo);
            //   res.send(dbTodo);
        });
    });

    app.get("/api/room", function (req, res) {
        db.Room.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    app.post("/api/room", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Room.create({
            userID: req.body.userID,
            roomID: req.body.roomID,
        }).then(function (dbTodo) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbTodo);
            //   res.send(dbTodo);
        });
    });

};