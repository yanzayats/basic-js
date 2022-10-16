const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let disP ='--discard-prev';
  let dubP ='--double-prev';
  let disN ='--discard-next';
  let dubN ='--double-next';

  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  
  

  let newArr = arr;
  let check = newArr.every(el =>{
      return (el !== disP && el !== dubP && el !== disN && el !== dubN)
  })
  
  if(check === true){
    return arr
  }
  let result = newArr.reduce((acc, el, index, array)=>{
    if(typeof(el) === 'number'){
      acc.push(el);
    }
    if(el=== disP){
      if( typeof array[index-1] === 'string'){
        acc
      } else{
        acc.pop()
      }
    }
    if(el === dubP){
      if(index > 0){
        if(typeof array[index-1] === 'string'){
          acc
        } else{
                   acc.push(array[index-1])
        }
      }
    }
    if(el=== disN){
      newArr.splice(index+1,1)
    }
    if(el === dubN){
      if(index < newArr.length -1){
        acc.push(array[index+1])
      }
    }
    return acc;
  }, [])
return result
}


module.exports = {
  transform
};
