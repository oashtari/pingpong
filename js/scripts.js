// Back-end
var input;
var number;

var numbers = function () {

if (number > 250) {
  alert("Please enter a smaller number, a number <= 250 - thank you!")
} else if (for (i=0; i<=number; i+=1)) {
  } if (i % 15 === 0) {
    print ("pingpong");
  } else if (i % 5 === 0) {
      print ("pong");
    } else if (i % 3 === 0) {
      print ("ping");
    } else if {
      print (number)
    }
  }
//
// array.forEach(function(soap) {
//       $("#omid").append("<p>" + soap + "</p>");
//     })





// Front-end
$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    input = parseInt($("input#number").val());
    number = input + 1;
  })
})





// A user should be able to enter a new number and see new results over and over again.
//
