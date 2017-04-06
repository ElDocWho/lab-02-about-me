'use strict';

var counter;
var sports = prompt('Do I like sports?');
if (sports.trim().toLowerCase() == 'yes' || sports.trim().toLowerCase() == 'y') {
  alert('Correct!!! I do like sports');
  counter ++;
}
else {
  alert('Wrong!!! I do like sports');
}
console.log('Do you like sports? ' + sports);
var work = prompt('Do I like working?');
if (work.trim().toLowerCase == 'yes' || work.trim().toLowerCase == 'y') {
  alert('Correct!!! I do like working');
  counter ++;
}
else {
  alert('Wrong!!! I do like working.');
}
console.log('Do you like working? ' + work);
var drink = prompt('Do I like beer? ');
if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y') {
  alert('Correct!!! I like beer.');
}
else {
  alert('Wrong!!! I like beer');
}console.log('Do you like beer?' + drink);
var color = prompt('Do you like the black color? ');
if (color.trim().toLowerCase() == 'yes' || color.trim().toLowerCase() == 'y') {
  alert('Nice, it is an awesome color');
}
else {
  alert('I guess color black is not for everybody');
}
console.log('Do you like the black color? ' + color);
var pizza = prompt('Do you like pizza? ');
if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y') {
  alert('Yeah!!! pizza is good');
}
else {
  alert('Afraid of gaining weight?');
}
console.log('Do you like pizza? ' + pizza);

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
  } else if (parseInt(guessNum) < randomNumber) {
    alert('Number too low!');
  } else if (parseInt(guessNum) > randomNumber) {
    alert('Number too hi!');
  }
};
if (notGuessed === true) {
  alert('Better luck next time, you did not guess the number');
};

for (var i = 6; (i > 0) && (stateNotGuessed === true); i--) {
  var guessState = prompt('Enter a state that I have lived in, opportunities left: ' + i);
  for (var index = 0;(index < 6) && (stateNotGuessed === true);index++) {
    if (guessState.trim().toLowerCase() === states[index].trim().toLowerCase()) {
      console.log(states[index]);
      alert('You got it!!!! the states I have lived in are: ' + states);
      stateNotGuessed = false;
    }
  }
  if (stateNotGuessed === true) {
    alert('Not in that state!');
  }
}

if (stateNotGuessed === true) {
  alert('Sorry you did not guess any of the states, \n the states I have lived in are: ' + states);
}
