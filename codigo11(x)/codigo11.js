let ent = "2000-04-11";

let birthYear = parseInt(ent.split('-')[0])
let birthMonth = parseInt(ent.split('-')[1])
let birthDay = parseInt(ent.split('-')[2])


let curDate = new Date();

let curYear = curDate.getFullYear()
let curMonth = curDate.getMonth() + 1 // (janeiro começa em 0)
let curDay = curDate.getDay()


let idade = curYear - birthYear

if (curMonth < birthMonth || (curMonth == birthMonth && curDay < birthDay)){
  idade = idade - 1
}

console.log(idade)