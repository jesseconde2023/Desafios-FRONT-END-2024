let ent = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";


let upCased = 0
let downCased = 0 

for (let i = 0; i < ent.length; i++) {
  
  if (ent[i] ===  ent[i].toUpperCase()){
    upCased = upCased + 1;
  }else{
    downCased = downCased + 1;
  }

}

console.log(upCased)