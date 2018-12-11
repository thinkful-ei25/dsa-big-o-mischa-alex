'use strict';

function createPairs(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += 1;
      for(let j = i+1; j < arr.length; j++) {
          counter += 1;
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
  console.log(counter);
}

// best and worst => O(n^2)

createPairs([1,2,3,4]);
createPairs([5,8,1,0,6,10]);
