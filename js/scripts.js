//Business Logic
function Tickets(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Tickets.prototype.cost = function(){
  var cost = 0
  if ((this.age >= 65 && this.movie > 1 && this.time <= 3) || (this.age < 65 && this.movie > 1 && this.time <= 3) || (this.movie > 1 && this.time > 3 && this.age >= 65)) {
    return cost + 5
  } else if((this.movie === 1 && this.age >= 65 && this.time > 3) || (this.movie ===1 && this.age < 65 && this.time <= 3)) {
    return cost + 10
  } else {
    return cost + 12
  }
  return cost
}

$(document).ready(function() {
  $('#movie-ticket form').submit(function(event) {
    event.preventDefault();


    var ageInput = parseInt($('input#age').val());
    var movieInput = parseInt($('#movie').val());
    var timeInput = parseInt($('#time').val());
    var newTickets = new Tickets(movieInput, timeInput, ageInput);

    $('.price').text(newTickets.cost());

    resetFields();

  });
});
