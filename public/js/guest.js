var  socket = io();
const textArea = document.getElementById("msgList")
socket.on("message", (data)=> {
    $("#msgList").append("\n" +data);
    textArea.scrollTop = textArea.scrollHeight;
})
socket.on("messages", (data) => {
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            $("#msgList").append("\n" +data[i]);
            textArea.scrollTop = textArea.scrollHeight;
        }   
    }
});


socket.on('stream',(image)=>{
    $('#play').attr('src',image);
    $('#aplay').attr('src',image);
    console.log(image);
    
});

$("#subBtn").on("click", (e)=>{
    e.preventDefault();
    var user = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var emit = user + ": " + $("#message").val();
    socket.emit("message", emit );
    $("#message").val("");

});


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

$(document).ready(function(){

    $("#enter").on("click", function(event) {
        
        var newGuestUser = {
            name: $("#user").val().trim(),
            email: $("#email").val().trim(),
           
        }
        console.log(newGuestUser);
        $.post("/api/users", newGuestUser).then(function(data){
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
