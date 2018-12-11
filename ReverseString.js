let counter = 0;
function ReverseString(string){ 
  counter += 1;
  if (string === ''){ 
    console.log('counter', counter);
    return ''; 
  } else { 
    return ReverseString(string.slice(1)).concat(string[0]); 
  }
}

console.log(ReverseString('String Cheese')); 
console.log(ReverseString('Hot tamales they\'re red hot')); 
//best/worst ==> O(n) 
//recurses through entire string (array of characters) once 


//tring Cheese S
//ring Cheese tS
//ing Cheese rtS
//ng Cheese irtS
//g Cheese nritS

