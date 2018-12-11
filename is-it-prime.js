'use strict';

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  let counter = 0;
  if (n < 2 || n % 1 != 0) {
      counter += 1;
      console.log(counter);
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    counter += 1;
    if (n % i == 0) {
      console.log(counter);
      return false;
    }
  }
  console.log(counter);
  return true;
}

// worst case is when the number is prime 
// best case is when number is divisible by any integer
// O(n) ==> the function will have to iteratively check each instance (for loop) 
// before it reaches (n)

isPrime(7);
isPrime(20);