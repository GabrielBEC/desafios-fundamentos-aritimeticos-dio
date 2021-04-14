let valor = [];

for(let i = 0; i<5; i++){
    valor.push(i);
}

const pares = valor.filter(a => a % 2 == 0).length;
const impares = valor.filter(a => a % 2 != 0).length;
const positivo = valor.filter(a => a > 0).length;
const negativos = valor.filter(a => a < 0).length;

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);