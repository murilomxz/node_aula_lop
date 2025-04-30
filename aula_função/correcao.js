const readline = require('readline-sync');

function input() {
    const conta = readline.question("Digite a conta: ").split(" ");
    return conta;
}
function somar(n1, n2) {
    return n1 + n2;

}
function subtrair(n1, n2) {
    return n1 - n2;

}
function multiplicar(n1, n2) {
    return n1 * n2;

}
function dividir(n1, n2) {
    return n1 / n2;

}
const conta = input()
const num1 = Number(conta[0]);
const num2 = Number(conta[2]);

if (conta[1] == "+") {
    resultado =somar(num1, num2)
}
else if (conta[1] == "-") {
  resultado = subtrair(num1, num2)
}
else if (conta[1] == "*") {
 resultado = multiplicar(num1, num2)
}
else if (conta[1] == "/") {
    resultado = dividir(num1, num2)
}
else {
    console.log("\nOperação ínválida!!!\n")
}
if (resultado != Infinity){
    console.log(`${num1} ${conta[1]} ${num2} = ${resultado}`)
} else{
    console.log("\nNão existe divisão por zero\n")
}
