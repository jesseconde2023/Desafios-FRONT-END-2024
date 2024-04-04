function encontrarMenorMaior(lista) {
    let menor = lista[0];
    let maior = lista[0];
    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        } else if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    
    return { menor, maior };
}

let numeros = [15, 8, 90, 75, 102, 6, 2];

let resultado = encontrarMenorMaior(numeros);

console.log("O menor número digitado é:", resultado.menor);
console.log("O maior número digitado é:", resultado.maior);