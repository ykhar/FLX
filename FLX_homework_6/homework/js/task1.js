'use strict';

var a = prompt('Enter number for a');
var b = prompt('Enter number for b');
var c = prompt('Enter number for c');

if ( a > 0 && b >= 0 && c >= 0 ) {
  var d = getDiscriminant(a, b, c);
  alert(getAnswer(d, a, b));
} else {
  alert('Invalid input data');
}   

function getDiscriminant(a, b, c) {
  return Math.pow(b, 2) - (4 * a * c);
}

function getAnswer(d, a, b) {
  if (d < 0) {
    return 'No solution';
  } else if (d === 0) {
    return 'x = 0';
  } else {
    var x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
    var x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
    return `X1 = ${x1}, X2 = ${x2}`;
  }
}