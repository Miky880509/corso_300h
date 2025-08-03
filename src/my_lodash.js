

export function chunk(array,size){
    if(!Array.isArray (array) || size <=0){
        return [];
    };
   let result =[];
   for (let i = 0; i < array.length; i += size) {
     result.push(array.slice(i, i + size)); // Estrazione chunk
    }
   return result;
 
};

export function difference (arrOne, arrTwo){
    return arrOne.filter(item=>!arrTwo.includes(item))
};

export function xorArrays(...arrays) {
  const allValues = arrays.flat(); // Unisce tutti gli array
  return allValues.filter(item =>arrays.filter(arr => arr.includes(item)).length === 1);
}
