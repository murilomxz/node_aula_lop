const readline = require('readline-sync');

const opcao=Number(readline.question("Digite 1 para soma, 2 para subtracao, 3 para multiplicacao e 4 para divisao: "))

function somar(){
    const n1=Number(readline.question("informe o primeiro numero:"))
const n2=Number(readline.question("informe o segundo numero:"))
  n3= n1+n2;
console.log(`${n1}+${n2}=${n3}`)

}
function subtrair(){
    const n1=Number(readline.question("informe o primeiro numero:"))
const n2=Number(readline.question("informe o segundo numero:"))
  n3= n1-n2;
console.log(`${n1}-${n2}=${n3}`)

}
function multiplicar(){
    const n1=Number(readline.question("informe o primeiro numero:"))
const n2=Number(readline.question("informe o segundo numero:"))
  n3= n1*n2;
console.log(`${n1}*${n2}=${n3}`)

}
function dividir(){
    const n1=Number(readline.question("informe o primeiro numero:"))
const n2=Number(readline.question("informe o segundo numero:"))
  n3= (n1/n2).toFixed(2);
console.log(`${n1}/${n2}=${n3}`)

}

if(opcao==1){
    somar()
}
else if(opcao==2){
    subtrair()
}
else if(opcao==3){
    multiplicar()
}
else if(opcao==4){
    dividir()
}
else{
    console.log("numero digitado esta incorreto! tente novamente")
  
}

