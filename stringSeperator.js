let counter = 0;
function StringSeperator(seperator, string){ 
    counter += 1;
  const index = string.indexOf(seperator); 

  if (index === -1){ 
      console.log(counter);
    return [string]; 
  }
  return [string.slice(0, index)].concat(StringSeperator(seperator, string.slice(index + seperator.length)));
}

console.log(StringSeperator(' ', 'Hello Sean'));
// O(n)  --> relationship between input and operations is 1 to 1 
// for every seperator found, call function once


function StringSeperatorIt(str, seperator){
    let counter = 0;
  const arr = [];
  const index = str.indexOf(seperator); 
  for(let i = 0; i < str.length; i++){
    counter += 1;
      console.log('i:', i, 'str.length: ', str.length);
    if (str[i] === seperator ){
      arr.push(str.slice(0, i));
        
    }else if(i === str.length-1){
        arr.push(str.slice([index+1], str.length));
    }
  }
  console.log(counter);
  return arr;

}
console.log(StringSeperatorIt('freaky deaky',' '));


//also O(n)  poorly implemented :-( 
    // iterating through, split on seperator, increment to index of seperator, loop again etc. 
