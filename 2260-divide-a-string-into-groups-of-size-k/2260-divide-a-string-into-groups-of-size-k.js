/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let array =[]
     let splited = s.split('')
     let a = 0
     for(let i=0;i<s.length/k;i++){
      let sliced =  splited.slice(a,a+k)
        if(sliced.length < k){
          for(let i=sliced.length-1;i<k-1;i++){
            sliced.push(fill)
          }
       }
       array.push(sliced.join(''))
       a+=k
     
     }
    
  return array
};