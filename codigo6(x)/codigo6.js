let n = 12


function fatRecursivo(n){
  if (n == 1){
    return 1
  }else{
    return n * fatRecursivo(n - 1);
  }
}

function fatIterativo(n){
  for (let i = n - 1; i >= 1; i--){
    n = n * i;
  }
  return n
}




let fat = fatRecursivo(n)

console.log(fat)

 fat = fatIterativo(n)

console.log(fat)