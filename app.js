'use strict';

var sports = prompt('Do you like sports?');
if (sports.trim().toLowerCase() == 'yes' || sports.trim().toLowerCase() == 'y') {
  alert('Me too, Steelers is my football team');
}
else {
  alert('Sports are fun, you should try one sometime!');
}
console.log('Do you like sports? ' + sports);
var work = prompt('Do you like working?');
if (work.trim().toLowerCase == 'yes' || work.trim().toLowerCase == 'y') {
  alert('Good, I also like working');
}
else {
  alert('Working is good for you, you should probably try it');
}
console.log('Do you like working? ' + work);
var drink = prompt('Do you like beer? ');
if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y') {
  alert('I also like beer, specially crafted beer');
}
else {
  alert('Beer is good for the soul, lets have a beer some day.');
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

var chosenNumber = 12;
var guessCorrect = false;
