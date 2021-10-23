
//Tabuada com números aleatórios de 0 até 100

let numero = Math.random()*100
let numeroArredondado = Math.round(numero)
console.log(numeroArredondado)

function tabuada(){

    for(let i=0; i <=10; i++){
        resultado = numeroArredondado * i
        console.log(`${i} x ${numeroArredondado} = ${resultado}`)
    }
}
tabuada()