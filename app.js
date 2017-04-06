'use strict';

var counter = 0;
var name = prompt('What is your first name?');
var sports = prompt('Do I like sports?');
if (sports.trim().toLowerCase() == 'yes' || sports.trim().toLowerCase() == 'y') {
  alert('Correct!!! I do like sports');
  counter ++;
  console.log(counter);
}
else {
  alert('Wrong!!! I do like sports');
}
console.log('Do I like sports? ' + sports);
var work = prompt('Do I like working?');
if (work.trim().toLowerCase == 'yes' || work.trim().toLowerCase() == 'y') {
  alert('Correct!!! I do like working');
  counter ++;
  console.log(counter);
}
else {
  alert('Wrong!!! I do like working.');
}
console.log('Do I like working? ' + work);
var drink = prompt('Do I like beer? ');
if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y') {
  alert('Correct!!! I like beer.');
  counter ++;
  console.log(counter);
}
else {
  alert('Wrong!!! I like beer');
}
console.log('Do I like beer? ' + drink);
var color = prompt('Do I like the pink color? ');
if (color.trim().toLowerCase() == 'yes' || color.trim().toLowerCase() == 'y') {
  alert('Wrong!!! I do not like it.');
}
else {
  alert('Correct, I don\t like pink, but I do like black.');
  counter ++;
  console.log(counter);
}
console.log('Do I like the pink color? ' + color);
var pizza = prompt('Do I like pizza?');
if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y') {
  alert('Correct!!! I do like pizza.');
  counter ++;
  console.log(counter);
}
else {
  alert('Wrong!!! I do like pizza.');
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
    counter ++;
    console.log(counter);
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
alert (name + ' You got ' + count + 'out of 9 right!');
