function findRandomElement(arr) {
  let counter = 0;
  counter += 1;
  return arr[Math.floor(Math.random() * arr.length)], counter;
}
//O(1) ===> only one step, no matter what!!
console.log(findRandomElement([1,2,3,4,5,2,1,5,1,35,33513453]));