const socket = io();
const textArea = document.getElementById("msgList");

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


$(document).ready(function(){

    // $("#enter").on("click", function(event) {
        
    //     var newGuestUser = {
    //         name: $("#user").val().trim(),
    //         email: $("#email").val().trim(),
           
    //     }
    //     console.log(newGuestUser);
    //     socket.emit("addUser", newUser);
    //     $.post("/api/users", newGuestUser).then(function(data){
    //         console.log(data)
    //     });
    //        // Clear localStorage
    // localStorage.clear();
    
          
    // localStorage.setItem("name", newGuestUser.name);
    // localStorage.setItem("email", newGuestUser.email);
    // });
        // $("#name-display").text(localStorage.getItem("name"));
        // $("#email-display").text(localStorage.getItem("email"));
       
       
});
var newGuestUser = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email")
   
}
socket.emit("addUser", newGuestUser);
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


var canvas = document.getElementById("preview");
var context = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 250;

context.width = canvas.width;
context.height = canvas.height;

var video = document.getElementById("video");



function logger(msg) {

}

function loadCamera(stream) {
    video.srcObject = stream;

}

function loadFail() {

}

function viewVideo(video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit('stream', canvas.toDataURL('image/webp'));

}

$(function () {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, loadCamera, loadFail);
    }

    setInterval(function () {
        viewVideo(video, context);
    }, 5);
});

// document.getElementById("result").innerHTML = localStorage.getItem("id");
