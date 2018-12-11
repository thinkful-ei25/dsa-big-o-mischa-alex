'use strict';

let counter = 0;
//recursive
function binary(num) {
  counter += 1;
  //base case
  if (num === 0) {
    console.log(counter);
    return '';
  }
  //general case
  const remainder = Math.floor(num % 2);

  return binary(Math.floor(num / 2)) + remainder;
}
console.log(binary(60));

// O(log(n)) ==> everytime the function is called, the input is divided in half until it reaches zero

//iterative
function binaryIt(num) {
  // return num.toString(2);
  let binaryString = '';
  while (num > 0) {
    counter += 1;
    binaryString = Math.floor(num % 2) + binaryString;
    num = Math.floor(num / 2);
  }
  console.log(counter);
  return binaryString;
}

console.log(binaryIt(25));

// O(log(n)) ==> everytime the function is called, the input is divided in half until it reaches zero
