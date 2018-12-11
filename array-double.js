'use strict';
// Input: [1, 2, 3]
// Output: [2, 4, 6]

let counter = 0;
//recursive
function doubleArray(arr) {
  counter += 1;
  //base case
  if (!arr.length) {
    console.log(counter);
    return [];
  }
  const newNum = arr[0] * 2;
  return [newNum, ...doubleArray(arr.slice(1))];
}
const arr = [5, 20, 4];
console.log(doubleArray(arr));

// O(n) ==> this function is linear to the input. 
// same number of instances as the length of the array 

//iterative
function doubleArrayIt(arr) {
  for (let i=0; i < arr.length; i++){
    counter += 1;
    arr[i] * 2;
  }
  console.log(counter);
  return arr;
}
const arr2 = [5, 20, 4];
console.log(doubleArrayIt(arr2));

// O(n) ==> this function is linear to the input. 
// same number of instances as the length of the array 

