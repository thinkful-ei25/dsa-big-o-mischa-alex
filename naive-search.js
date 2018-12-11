function naiveSearch(array, item) {
  let counter = 1;
  for (let i=0; i<array.length; i++) {
    counter += 1;
    if (array[i] === item) {
      return i, counter;
    }
  }
  return `${counter} - item not found`;
}
//O(n) 
//best case is --> item at array[0]
//worst case --> item not in array (iterate through entire array)
let arr = [1,2,3,4,5,6,7,8,9];
console.log(naiveSearch(arr, 3));
console.log(naiveSearch(arr, 10));