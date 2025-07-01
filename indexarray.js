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


function difference(order1, order2) {
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

difference(casualNumber1, casualNumber2);

     

Array.prototype.average = function() {
    return this.length ? this.reduce((acc, val) => acc + val, 0) / this.length : 0;
};
console.log(my_array.average())
