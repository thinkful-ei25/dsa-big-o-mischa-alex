'use strict';

function doubleArrayValues(array) {
  let counter = 0;
  for (let i=0; i<array.length; i++) {
      counter += 1;
      array[i] *= 2;
  }
  console.log(counter);
  return array;
}

// best and worst case => O(n)

console.log(doubleArrayValues([1,2,3,4,5]));
