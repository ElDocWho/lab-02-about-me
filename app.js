'use strict';

var q1 = 'Do I like sports?';
var q2 = 'Do I like working?';
var q3 = 'Do I like beer? ';
var q4 = 'Do I like the pink color?';
var q5 = 'Do I like pizza?';

var counter = 0;
var name = prompt('What is your first name?');
function questions(q, correct) {
  var functionCounter;
  var questionPrompt = prompt(q);
  if (questionPrompt.trim().toLowerCase() == correct) {
    alert('Correct!');
    functionCounter = 1;
    console.log(counter);
  } else {
    alert('Wrong!!!');
    functionCounter = 0;
  }
  return functionCounter;
}


counter += questions(q1, 'yes');
counter += questions(q2, 'yes');
counter += questions(q3, 'yes');
counter += questions(q4, 'no');
counter += questions(q5, 'yes');


  var guesNum;
  var notGuessed = true;
  var randomNumber = Math.floor(Math.random() * 10);
  var guessState;
  var states = ['Texas', 'Washington', 'Florida', 'Oklahoma', 'Idaho', 'Iowa'];
  var stateNotGuessed = true;

  for (var i = 4;(i > 0) && (notGuessed === true); i--) {
    var guessNum = prompt('\t Guess a number between 0 and 10 \n \t You have ' + i + ' opportunities left');
    if (parseInt(guessNum) === randomNumber) {
      alert('You got it!!!');
      notGuessed = false;
      counter ++;
      console.log(counter);
    } else if (parseInt(guessNum) < randomNumber) {
      alert('Number too low!');
    } else if (parseInt(guessNum) > randomNumber) {
      alert('Number too high!');
    }
  };
  if (notGuessed === true) {
    alert('Better luck next time, you did not guess the number');
  };

  for (var i = 6; (i > 0) && (stateNotGuessed === true); i--) {
    var guessState = prompt('Enter a state that I have lived in, opportunities left: ' + i);
    for (var index = 0;(index < 6) && (stateNotGuessed === true);index++) {
      if (guessState.trim().toLowerCase() === states[index].trim().toLowerCase()) {
        alert('You got it!!!! the states I have lived in are: ' + states);
        stateNotGuessed = false;
        counter ++;
        console.log(counter);
        console.log(states[index]);
      }
    }
    if (stateNotGuessed === true) {
      alert('Not in that state!');
    }
  }

  if (stateNotGuessed === true) {
    alert('Sorry you did not guess any of the states, \n the states I have lived in are: ' + states);
  }
  */
  alert (name + ' You got ' + counter + ' out of 7 right!');
