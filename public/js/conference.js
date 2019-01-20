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

    socket.emit("message", $("#message").val());
    $("#message").val("");
});


var fps = 24;
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
        navigator.getUserMedia({ video: true, audio: true }, loadCamera, loadFail);
    }

    setInterval(function () {
        viewVideo(video, context);
    }, 1000/fps);
});

document.getElementById("result").innerHTML = localStorage.getItem("id");