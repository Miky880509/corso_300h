console.log("Hello, world!");

/**
 * 
 * @param {*} an_array 
 * @param {*} callback 
 * @returns {} two arrays with "good" and "bad" elements
 * eg.
 * _.partition([1, 2, 3, 4], n => n % 2);
 * // → [[1, 3], [2, 4]]
 */

my_array= [50, 60, 10, 25, 30, 45, 5];
arrayword=["ciao","come", "stai"]
arraydobble=["ciao","ciao", "viola","viola", 10,10]
arraycolor=["rosso","giallo","blu","viola","bianco","nero"];



function filter(my_array, my_callback) {
    
    let result = []

    for (let i = 0; i < my_array.length; i++) {
     if (my_callback(my_array[i])) {
         result.push(my_array[i]) } 
    } 
    return result 
}

console.log(filter(my_array, n => n % 2 === 0));



function map(my_array, my_callback_map) { 
    
    let result = [];

    for (let i = 0; i < my_array.length; i++) {
        result.push(my_callback_map(my_array[i])); 
    }
    return result; 
}

console.log(map(my_array, n => n ** 2));



function foreach(my_array) { 
    
    let result = [];
    
    for (i = 0; i < my_array.length; i++) {
     console.log(my_array[i]);
    } 
    return result;
} 

console.log(foreach(my_array));


function bipartition(my_array, my_callback_part) { 
    
    let result_good = [];
    let result_bad = [];

    for (let i = 0; i < my_array.length; i++) {
        if (my_callback_part(my_array[i])) {
            result_good.push(my_array[i]) 
       } else {
        result_bad.push(my_array[i]) 
       }
    }
    
    return  {result_good, result_bad};
   
} 

console.log(bipartition(my_array, n => n % 2===0));


function sum(my_array) { 
    return my_array.reduce((acc,val)=> acc +val,0)
   
} 
console.log (sum(my_array))


function count(my_array){
    return my_array.length
}

console.log (count(my_array))


console.log(arraycolor.sort())
console.log(my_array.sort((a,b)=> b-a))
console.log(my_array.sort((a,b)=> a-b))

console.log(my_array[Math.floor(Math.random() * my_array.length)]);

console.log(arraycolor[Math.floor(Math.random() * arraycolor.length)]);

function divisi (arraydobble){

    let parole = arraydobble.filter(item => typeof item === "string")
    let number = arraydobble.filter(item => typeof  item ==="number")
  
    return {parole, number}
}
  
console.log (divisi(arraydobble))
  
  

//Lavoriamo su tutti gli array.prototype 

Array.prototype.last = function() {
    return this[this.length - 1]; 
};

console.log (my_array.last())
console.log (arraycolor.last())
console.log (arrayword.last())


Array.prototype.first = function() {
    return this[0]; 
};
console.log (my_array.first())
console.log (arraycolor.first())
console.log (arrayword.first())


Array.prototype.unique = function() {
    return [new Set(this)];
};
console.log (arraydobble.unique())


// APPROFONFIMENTO DIFFERENCE

/* Nome un po' fuorviante, infatti quando uso la funzione non prendo un random int, ma un Array di interi */
function getRandomInt(lun, min, max) {
    let array = [];
    for (let i = 0; i < lun; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}


let casualNumber1 = getRandomInt(10, 10, 100);
console.log("Array con numeri casuali1:", casualNumber1);


let casualNumber2 = getRandomInt(100, 10, 100);
console.log("Array con numeri casuali2:",casualNumber2);

/* nome un po' fuorviante, sembra che gli array debbano essere giá ordinati quando li passi alla funzione */
function difference(order1, order2) {
    order1 = [...order1].sort((a, b) => a - b); 
    order2 = [...order2].sort((a, b) => a - b); 

    let uniqueArray1 = [];
    for (let i = 0; i < order1.length; i++) {
        let found = false;

        /* START pro tip: the following lines perform a well known and reusable routine. You should refactor this code to a function.
        Where can you find analogous code? */
        for (let j = 0; j < order2.length; j++) {
            if (order1[i] === order2[j]) {
                found = true;
                break;
            }
        }
        // END of pro tip


        /* ALTERNATIVA 1 (sintassi alternativa usando for-of, stessa semantica): haystack e needle sono termini usati in inglese per le operazioni di ricerca, 
        * needle vuol dire ago mentre haystack pagliaio 
        */
        // const needle = order1[i];
        // const haystack = order2; 

        // for (const element of haystack) {
        //     if (element === needle) {
        //         found = true;
        //         break
        //     }
        // }

        /* ALTERNATIVA 2 (sempre stessa semantica, cambia solo la sintassi) */
        // found = haystack.some(element => element === needle)

        /* ALTERNATIVA 3 (stessa cosa) */
        // found = haystack.indexOf(element => element === needle) !== -1

        /* Per un algoritmo piú veloce tuttavia devi cambiare le operazioni logiche che fai non la 
        * semantica quindi per la complessitá asintotica dell algoritmo 
        * queste alternative sono su per giú equivalenti 
        */
    }
    console.log("Elementi presenti nel primo array ma non nel secondo:", uniqueArray1);

    let uniqueArray2 = [];
    for (let i = 0; i < order2.length; i++) {
        let found = false;
        for (let j = 0; j < order1.length; j++) {
            if (order2[i] === order1[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueArray2.push(order2[i]);
        }
    }
    console.log("Elementi presenti nel secondo array ma non nel primo:", uniqueArray2);
}

difference(casualNumber1, casualNumber2);

     

Array.prototype.average = function() {
    return this.length ? this.reduce((acc, val) => acc + val, 0) / this.length : 0;
};
console.log(my_array.average())
