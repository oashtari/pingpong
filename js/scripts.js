// Back-end
var input;
var number = [];
// var pingpong = [];

var pp = function (input) {
  if (input > 250) {
    alert("Please enter a smaller number, a number <= 250 - thank you!")
  } else {
    for (i=1; i<=input; i+=1) {
      number.push(i);
}
}
}

var pingpong = function(){
    number.map(function(numbers){
    if (numbers % 15 === 0) {
      $("#result").append("<li>" + "pingpong" + "</li>");
    } else if (numbers % 5 === 0) {
      $("#result").append("<li>" + "pong" + "</li>");
    } else if (numbers % 3 === 0) {
      $("#result").append("<li>" + "ping" + "</li>");
    } else {
      $("#result").append("<li>" + numbers + "</li>");
      }
  })
  }


// else if (words.charAt(0) !== (vowel)) {
//           firstLetter = words.slice(0,1);
//           newWords = words.replace(words.charAt(0),'') + firstLetter + "ay";

// Front-end
$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    input = parseInt($("input#number").val());
    pp(input);
    pingpong();
    $("#result").show();
  });
});




// A user should be able to enter a new number and see new results over and over again.
//
