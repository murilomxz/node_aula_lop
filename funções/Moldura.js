//desenha uma moldura em frase

const readline = require('readline-sync');
const frase=readline.question('Digite uma frase: ');
const cr= '\u2508';
for(let i = 0; i<frase.length+2; i++){
    process.stdout.write(cr); 
    
}
console.log(`\n${cr}${frase}${cr}`)
for(let i = 0; i<frase.length+2; i++){
    process.stdout.write(cr);
    
}