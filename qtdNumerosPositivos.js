//let valor = [7, -5, 6, -3.4, 4.6, 12]
let valor = []
for(let i = 0; i < 6; i++){
    valor.push(i)
}

let positivos = valor.filter(a => a > 0).length

console.log(positivos, "valores positivos")