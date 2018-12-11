'use strict';

function isEven(value){
  let total=0;
  if (value % 2 == 0){
    total += 1;
    console.log(total);
    return true;
  }
  else
    total += 1;
    console.log(total);
    return false;
}

// best and worse case -> O(1)

console.log(isEven(4));
console.log(isEven(5));