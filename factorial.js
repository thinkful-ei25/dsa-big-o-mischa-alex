let counter = 0;
function fact(num){
  counter += 1;
  if(num === 1){
    console.log(counter);
    return 1;
  }
  return  num * fact(num-1);
}
console.log(fact(8));

// O(n) ==> linear relationship! call the function every time increase is decreased by one, until input is 1

function factIt(num){
  let coutner = 0;
  let product = 1;
  for(let i = num; i > 0; i--){
    coutner += 1;
    product *= i;
  }
  console.log(coutner);
  return product;
}

console.log(factIt(8));
// O(n) ==> linear relationship! decrement loop every time until i is 0