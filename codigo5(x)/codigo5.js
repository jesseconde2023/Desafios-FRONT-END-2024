let frase = prompt("Digite uma frase:");

frase = frase.trim();

let palavras = frase.split(" ");

let numeroPalavras = palavras.length;

console.log("O número de palavras na frase é:", numeroPalavras);