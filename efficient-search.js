'use strict';

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;
  let counter = 0;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];
      if (currentElement < item) {
          counter += 1;
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          counter += 1;
          maxIndex = currentIndex - 1;
      }
      else {
          console.log(counter);
          return currentIndex;
      }
  }
  console.log(counter);
  return -1;
}

// O(log(n)) => regardless of the the array size, 
// it will divide the array in half and search either half for 'item' and only add a single operation

efficientSearch([1,2,3,4,5,6,7,8,9], 7);
efficientSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 16);