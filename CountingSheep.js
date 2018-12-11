let counter = 0;
function CountingSheep(numSheep){ 
  counter += 1;
  console.log(`${numSheep}- Another sheep jumps over the fence`); 
  if (numSheep <= 1){
    console.log(counter) ;
    return; 
  }
  else { 
    return CountingSheep(numSheep-1);  
  }
}
//O(n) ==> linear relationship with input! always the number in the param

CountingSheep(5); 