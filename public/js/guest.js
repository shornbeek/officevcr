var socket = io();
// const textArea = document.getElementById("msgList")
socket.on("message", (data) => {
    $("#msgList").append("\n" + data);
    textArea.scrollTop = textArea.scrollHeight;
})
socket.on("messages", (data) => {
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            $("#msgList").append("\n" + data[i]);
            textArea.scrollTop = textArea.scrollHeight;
        }
    }
});


socket.on('stream', (image) => {
    $('#play').attr('src', image);


});

$("#subBtn").on("click", (e) => {
    e.preventDefault();
    var user = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var emit = user + ": " + $("#message").val();
    socket.emit("message", emit);
    $("#message").val("");

});

$(".chatform").submit ( (event)=> {
    console.log("hello ")

event.preventDefault();
var user = localStorage.getItem("name");
var email = localStorage.getItem("email");
var emit = user + ": " + $("#message").val();
socket.emit("message", emit);
$("#message").val("");
})


// var newUser = {
//     name: $("#user").val().trim(),
//     email: $("#email").val().trim(),
//     random: Random(),
// }


// var random = Random();
// var url = 'http://localhost:8080/guest';

// localStorage.setItem("id", newUser.random);

// if(localStorage.getItem('random') != null){
//     var storedVariable = localStorage.getItem('random');
//     url += '?random=' + storedVariable;
// }


// // Place-holder for main.js

$(document).ready(function () {

    $("#enter").on("click", function (event) {

        var newGuestUser = {
            name: $("#user").val().trim(),
            email: $("#email").val().trim(),

        }
        console.log(newGuestUser);
        $.post("/api/users", newGuestUser).then(function (data) {
            console.log(data)
        });
        // Clear localStorage
        localStorage.clear();


        localStorage.setItem("name", newGuestUser.name);
        localStorage.setItem("email", newGuestUser.email);
    });
    // $("#name-display").text(localStorage.getItem("name"));
    // $("#email-display").text(localStorage.getItem("email"));


});

// When the page loads, grab and display all of our Members
// $.get("/api/users", function (data) {

//     if (data.length !== 0) {

//         for (var i = 0; i < data.length; i++) {

//             var row = $("<div>");
//             row.addClass("Members");

//             row.append("<h3>" + data[i].name + "</h3>");
//             row.append("<p>" + data[i].email + "</p>");
//             $(".panel-body").prepend(row);

//         }

//     }

// });

// When user (clicks enter-room button)
$("#enter-room").on("click", function (event) {
    event.preventDefault();

    // Make a newMember object
    var newUser = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
    };
    socket.emit("addUser", newUser);
    console.log(newUser);
    localStorage.setItem("name", newUser.name);
    localStorage.setItem("email", newUser.email);
    // localStorage.setItem("id", newUser.random);
    // Send an AJAX POST-request with jQuery
    $.post("/api/users", newUser)
        // On success, run the following code
        .then(function () {

            // var row = $("<div>");
            // row.addClass("Members");

            // row.append("<h3>" + data[i].name + "</h3>");
            // row.append("<p>" + data[i].email + "</p>");


            // $(".panel-body").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#email").val("");
});



const textArea = document.getElementById("msgList");


socket.on("listUsers", (data)=>{
    $(".panel-body").html("");
    for(let i =0; i < data.length; i ++){
        var row = $("<div>");
        row.addClass("Members");

        row.append("<h3>" + data[i].name + "</h3>");
        row.append("<p>" + data[i].email + "</p>");


        $(".panel-body").prepend(row);
    }
});

// $(".chatform").submit((event)=> {
//     event.preventDefault();

//     var user = localStorage.getItem("name");
//     var email = localStorage.getItem("email");
//     var emit = user + ": " + $("#message").val();
//     socket.emit("message", emit);
//     $("#message").val("");
//     })

  
    

socket.on('stream', (image) => {
    $('#play').attr('src', image);
});