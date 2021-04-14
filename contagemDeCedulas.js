let valor = 89;

let notas = [100,50,20,10,5,2,1];

for(let nota of notas){
    let qtdCedulas = valor / nota;
    console.log(`${parseInt(qtdCedulas)} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}
