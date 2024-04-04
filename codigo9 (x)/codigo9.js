let vida = 100

function atk(vida, dano = 20){
  vida =  vida - dano;

  if (vida <= 0 ){
    return 0
  }else{
    return vida
  }
}


let nAtks = 3

for (let i = 0; i < nAtks; i++) {
  
  vida = atk(vida)

}

console.log(vida)