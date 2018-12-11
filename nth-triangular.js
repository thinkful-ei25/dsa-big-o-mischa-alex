'use strict';

//recursive
let counter = 0;
function triangularNumber(n) {
  counter += 1;
  //base
  if (n === 0) {
    console.log(counter);
    return n + 0;
  }
  return n + (triangularNumber(n - 1));
}

console.log(triangularNumber(5));

//best/worst case O(n) ==> same number of steps (+1 for base case) as the input number 'n'

//expected output
//This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

//iterative
function triangularNumberIt(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    counter += 1;
    total += i;
  }
  console.log(counter);
  return total;
}

console.log(triangularNumberIt(5));

//best/worst case O(n) ==> same number of steps as the input number 'n'