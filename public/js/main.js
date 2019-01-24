// // Place-holder for main.js

$(document).ready(function () {

    // $(".room").on("click", function (event) {

    
    // });



    $("#start").on("click", function (event) {

        var newUser = {
            name: $("#user").val().trim(),
            email: $("#email").val().trim(),
            comments: ["messageA","messageB","messageC..." ]
            // message: []
        }
        console.log(newUser);
        $.post("api/users", newUser).then(function (data) {
            console.log(data)
        });

        var newRoom = {
            roomID: Random(),
            //have socket io add the ids here on userID
            userID: ["id1", "id2", "id3"]
        }
        console.log(newRoom);
        $.post("api/room", newRoom).then(function (data) {
            console.log(data)
        });


        // Clear localStorage
        localStorage.clear();

        // Store all content into localStorage         
        localStorage.setItem("name", newUser.name);
        localStorage.setItem("email", newUser.email);
        localStorage.setItem("id", newRoom.roomID);
        localStorage.setItem("usersIdInRoom", newRoom.userID);
    });


    $("#name-display").text(localStorage.getItem("name"));
    $("#email-display").text(localStorage.getItem("email"));

});

function Random() {
    return Math.floor(Math.random() * 1000000000);
}

function randomValue() {
    document.getElementById('start').value = Random();
    // console.log(Random());
}

// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("id");

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text("The email " + email + " is valid :)");
      $result.css("color", "green");
      window.location.href = "/conference"
    } else {
      $result.text("The email " + email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $(".validate").bind("click", validate);