function areYouHere(arr1, arr2) {
  let counter = 1;
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      counter += 1;
      if (el1 === el2) {
        console.log(counter);
        return true;
      }
    }
  }
  console.log(counter);
  return false;
  
}
//On^2 --> one nested for loop which has to iterate through the array twice
//the best case -> match at [0][0] -- then counter is 2
console.log(areYouHere([0,1,2,3,4],[0,8,200,55,67,433,395896,323423,55,57,787]));

