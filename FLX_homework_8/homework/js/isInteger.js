function isInteger (num) {
  if (typeof num === 'number') {
    return num % 1 === 0;
  } 
}
isInteger(5);
isInteger(5.1);