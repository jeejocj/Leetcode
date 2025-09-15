/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   if(num < 10) return num
  
 let sumOfDigits = num.toString().split('').reduce((a,b) => a + +b,0)
 
return addDigits(sumOfDigits)
};