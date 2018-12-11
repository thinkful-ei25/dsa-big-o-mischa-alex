'use strict';
let counter =0;
function anagrams(str){
  let arr= [];
  //base
  if (str.length === 1){
    arr.push(str);
    console.log(counter);
    return arr;
  }
 
  //general
  for(let i = 0; i < str.length; i++){
    let prefix = str[i];
    let others = str.substring(0, i) + str.substring(i + 1);
    let otherAnagrams = anagrams(others);
    
    for (let j=0; j < otherAnagrams.length; j++){
      counter += 1;
      arr.push(prefix + otherAnagrams[j]);
    }
  }
  
  return arr;  
}

let str = 'twon';
console.log(anagrams(str));

// O(n!) ==> for every character within the input string, we need to process every possible combination of the remaining letter
