

const readline= require("readline-sync");
const frase=readline.question('Digite uma frase: ');
const cr= '█';
for(let i = 0; i<frase.length+2; i++){
    process.stdout.write(cr); //desenha uma moldura em frase
    
}
console.log(`\n${cr}${frase}${cr}`)
for(let i = 0; i<frase.length+2; i++){
    process.stdout.write(cr);
    
}