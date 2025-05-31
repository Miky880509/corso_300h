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

Array.prototype.average = function() {
    return this.length ? this.reduce((acc, val) => acc + val, 0) / this.length : 0;
};
console.log(my_array.average())

// Implementazione array da lodash 
// chunck

function chunk(array,size){
    if(!Array.isArray (array) || size <=0){
        return [];
    };
   let result =[];
   for (let i = 0; i < array.length; i += size) {
     result.push(array.slice(i, i + size)); // Estrazione chunk
    }
   return result;
 
};

console.log("chunk")
console.log(chunk(my_array, 3));
console.log(chunk(arrayword, 2));
console.log(chunk(arraydobble, 3));
console.log(chunk(arraycolor, 2));


// .difference()

function difference (arrOne, arrTwo){
    return arrOne.filter(item=>!arrTwo.includes(item))
};

const diffOne=difference(my_array,arraydobble);
const diffTwo=difference(arrayword,arraydobble);
const diffThree=difference(arraycolor,arraydobble);

console.log("difference");
console.log(diffOne);
console.log(diffTwo);
console.log(diffThree);


function xorArrays(...arrays) {
  const allValues = arrays.flat(); // Unisce tutti gli array
  return allValues.filter(item =>arrays.filter(arr => arr.includes(item)).length === 1);
}
console.log("xor")
console.log(xorArrays(my_array, arrayword, arraydobble, arraycolor));


