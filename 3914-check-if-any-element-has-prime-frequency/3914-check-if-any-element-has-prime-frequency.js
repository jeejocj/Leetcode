/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    
    let obj = {}
    for(let num of nums){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num]=1
        }
    }

  let arr =  Object.values(obj).map(a=>Number(a))

  function isPrime(num){
    if(num < 2) return false
    for(let i=2;i<num;i++){
        if(num % i == 0)return false
    }
    return true
  }

  let prime = arr.filter(a=>isPrime(a))
  console.log(prime)

  return prime.length == 0 ? false : true
};