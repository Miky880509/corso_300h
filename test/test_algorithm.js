import {
  getRandomInt,
  binSearch,
  binSearch2,
  binSearch3,
  difference,
  difference1,
  difference2
} from "../src/algorithm.js";

// Test binSearch con array ordinato
const sortedArr = [1, 2, 3, 4, 5, 6];
const needle = 5;
console.log("Test binSearch:");
binSearch(sortedArr, needle);

// Test binSearch3 -definizione algoritmo (con array decrescente) 
const sortedArr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const needle3 = 7;
console.log("Test binSearch3:");
console.log(binSearch3(sortedArr3, needle3));

// Test difference - Array Casuali 
const casualNumber1 = getRandomInt(10, 10, 100).sort((a, b) => a - b);
const casualNumber2 = getRandomInt(100, 10, 100).sort((a, b) => a - b);
console.log(difference(casualNumber1, casualNumber2))

// Test  binSearch2 e raggrupo il risultato in Difference1 e Difference2

console.log("Array 1:", casualNumber1);
console.log("Array 2:", casualNumber2);

//casualNumber1[0] = needle 

console.log(binSearch2(casualNumber2, casualNumber1[0]));

//Raggruppo i risultati

const soloNelPrimo = difference1(casualNumber1, casualNumber2);
console.log("Elementi solo nel primo array:", soloNelPrimo);

const comuni = difference2(casualNumber1, casualNumber2);
console.log("Elementi comuni:", comuni);


