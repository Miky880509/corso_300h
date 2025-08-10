
import { getRandomInt, difference, binSearch3 } 
from "../src/algorithm.js";


// genero array molto grandi

const casualNumberBig1 = getRandomInt(10000, 10, 1000).sort((a, b) => a - b);
const casualNumberBig2 = getRandomInt(1000, 10, 10000).sort((a, b) => a - b);


//eseguo la funzione Difference von oconteggio del tempo 

const startDiff = Date.now();
difference(casualNumberBig1,casualNumberBig2 );
const endDiff= Date.now();

console.log(`Tempo impiegato: ${endDiff - startDiff} ms`);

//eseguo la funzione Difference von oconteggio del tempo 

const startBin = Date.now();

const risultatoBin3= binSearch3 (casualNumberBig1,casualNumberBig2);

const endbin= Date.now();


console.log("Risultato:", risultatoBin3);
console.log(`Tempo impiegato: ${ endbin - startBin} ms`);
