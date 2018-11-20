/* Variables we need for the game */

var choices = ["rock", "paper", "scissors"]

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

/* Listen for the button clicks */
$('button').click(function(event) {
  var play_you = this.getAttribute('id');
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});


function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  console.log('move: ' + play_machine);

  return play_machine;
}

var verdict = 'lose';
console.log(you + ' ' + machine);

if (you == machine) {
  verdict = 'draw';
}

if ((you == "rock") && (machine == "scissors")) {
  verdict = 'win';
}

if ((you == "paper") && (machine == "rock")) {
  verdict = 'win';
}

if ((you == "scissors") && (machine == "paper")) {
  verdict = 'win';
}


 switch (verdict) {

   case 'win':
   won++;
   $("#won").text(won);
   break;

   case 'lose':
   lost++;
   $("#lost").text(lost);
   break;

   case 'draw':
   draw++;
   $("#draw").text(draw);
   break;
 }












/*
  console.log(verdict);
  if (verdict == 'win') {
    $("#game_won").text(verdict);
  }

  if (verdict == 'win') {
    won++;
    $("game_won").text(won);
  }

  if (verdict == 'lose') {
    lost++;
    $("game_lost").text(lost);
  }

  if (verdict == 'draw') {
    draw++;
    $("game_draw").text(draw);
  }

  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);
*/
//}
