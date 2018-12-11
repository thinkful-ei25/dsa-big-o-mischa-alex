'use strict';
//input 7 
//output 13
//sequence: 1 1 2 3 5 8 13
let counter = 0;
function fibonacci(num) {
  counter += 1;
  //base
  if (num <= 1) {
    console.log('counter', counter);
    return num;
  }
  //general
  return (fibonacci(num - 1) + fibonacci(num - 2));
}

console.log(fibonacci(4));

// O(2^n) ==> input is exponentially increasing instances the function reaches the base case

//iterative
function fibonacciIt(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    counter += 1;
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  console.log(counter);
  return arr;
}

console.log(fibonacciIt(7));

// O(n) => same amount of operations as the input

// to display all recursively
// function fibonacciList(num) { 
//   //base 
//   if (num < 2) { 
//     return [1]; 
//   } 

//   if (num < 3) { 
//     return [1, 1]; 
//   } 
  
//   //general 
//   let arr = fibonacciList(num - 1); 
//   arr.push(arr[num - 2] + arr[num - 3]); 
//   return arr; 
// }
  
// console.log(fibonacciList(7));