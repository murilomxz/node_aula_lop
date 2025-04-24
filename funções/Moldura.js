//desenha uma moldura em frase

const readline = require('readline-sync');
const cr= '█';
function barra(qtde) {
    for(let i = 0; i<qtde+2; i++){
    process.stdout.write(cr); 
    
}
}
const frase=readline.question('Digite uma frase: ');
barra(frase.length);
console.log(`\n${cr}${ frase }${cr}`)
barra(frase.length);
