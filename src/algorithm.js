
// APPROFONDIMENTO DIFFERENCE

//creare Array randomici

 export function getRandomInt(lun, min, max) {
    let array = [];
    for (let i = 0; i < lun; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}

//FUNZIONE VERBOSA E RINTONDANTE CON IL SECONDO CICLO FOR (Test difference)

export function difference(order1, order2) {
    order1 = [...order1].sort((a, b) => a - b); 
    order2 = [...order2].sort((a, b) => a - b); 

    let uniqueArray1 = [];

    for (let i = 0; i < order1.length; i++) {
        let found = false;
        for (let j = 0; j < order2.length; j++) {
            if (order1[i] === order2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueArray1.push(order1[i]);
        }
      
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

// ricevo valori preimpostati (Test binSearch con array ordinato)

export function binSearch(sortedArr, needle) {
    const mid = Math.floor(sortedArr.length / 2);
    const primameta = sortedArr.slice(0, mid);
    const secondameta = sortedArr.slice(mid);

    // se il needle è minore dell'ultimo elemento Cerca nella prima metà 
    if (needle <= primameta[primameta.length - 1]) {
        for (const element of primameta) {
            if (element === needle) {
                console.log(`Trovato ${element} nella prima metà!`);
                return true; 
            }
        }
    }
    
    //se il needle è minore dell'ultimo elemento Cerca nella prima metà
    else {
        for (const element of secondameta) {
            if (element === needle) {
                console.log(`Trovato ${element} nella seconda metà!`);
                return true; 
            }
        }
    };
    
    console.log(`Valore ${needle} non trovato nell'array`);
}

//ricevo array generati causualmente non generando il console log nelle funzione bin2
// Raggruppo il risultato
// Test (binSearch2 e raggrupo il risultato in Difference1)


export function binSearch2(sortedArr, needle) {
    const mid = Math.floor(sortedArr.length / 2);
    const primameta = sortedArr.slice(0, mid);
    const secondameta = sortedArr.slice(mid);

    // se il needle è minore dell'ultimo elemento Cerca nella prima metà 
    if (needle <= primameta[primameta.length - 1]) {
        for (const element of primameta) {
            if (element === needle) {
                return true; 
            }
        }
    } 
    
    //se il needle è minore dell'ultimo elemento Cerca nella prima metà
    else {
        for (const element of secondameta) {
            if (element === needle) {
                return true; 
            }
        }
    }
    
    return false;
}

// Raggruppo i risultati Elementi solo nel primo array:

export function difference1(order1, order2) {

 let uniqueElements = [];

    //iteri su gli elementi di order1 verificando se  NON sono presenti in order2
    for (const element of order1) {
        if (binSearch2(order2, element) === false){
            uniqueElements.push(element);
        }
    } 

    return uniqueElements;
}

//Raggruppo i risultati Elementi comuni:

export function difference2(order1, order2) {

 let uniqueElements = [];

    //iteri su gli elementi di order1 verificando se  NON sono presenti in order2
    for (const element of order1) {
        if (binSearch2(order2, element) === true){
            uniqueElements.push(element);
        }
    } 

    return uniqueElements;
}

// definizione dell'algoritmo 
// eliminazione array slice e continua a dividere array inziale   

export function binSearch3(array, needle) {
    
   let start = 0;
   let end = array.length -1;

   while ( start <= end) {
      const middle = Math.floor((start+end)/ 2);
      const midValue = array[middle];
     
      if (midValue === needle) {
            return true; 
        }
        
        if (needle > midValue) {
            start= middle + 1; 
        } else {
            end = middle - 1; 
        }
    }
    
    return false; 

}





