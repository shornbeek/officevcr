// // Place-holder for main.js

$(document).ready(function(){

    $("#mymodal").on("click", function(event) {
             
        var newRoom = {
            roomID: Random(),
            userID: [Random(),]
        }
        console.log(newRoom);
        $.post("api/room", newRoom).then(function(data){
            console.log(data)
        });
    });



    $("#start").on("click", function(event) {
        
        var newUser = {
            name: $("#user").val().trim(),
            email: $("#email").val().trim(),
            // random: Random(),
            message: []
        }
        console.log(newUser);
        $.post("api/users", newUser).then(function(data){
            console.log(data)
        });

        
           // Clear localStorage
           localStorage.clear();
    
    // Store all content into localStorage
    // localStorage.setItem(newUser);
          
    localStorage.setItem("name", newUser.name);
    localStorage.setItem("email", newUser.email);
    localStorage.setItem("id", newUser.random);
    });

    
        $("#name-display").text(localStorage.getItem("name"));
        $("#email-display").text(localStorage.getItem("email"));
      
        var url = new URL("http://localhost:8080/?x=1&y=2");
// If your expected result is "http://foo.bar/?x=1&y=2&x=42"
url.searchParams.append('x', newUser.random);
// If your expected result is "http://foo.bar/?x=42&y=2"
// url.searchParams.set('x', 42);
    
    });
    
    function Random() {
      return Math.floor(Math.random() * 1000000000);
    }
    
    function randomValue() {
      document.getElementById('start').value = Random();
      console.log(Random());
    }

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("id");




