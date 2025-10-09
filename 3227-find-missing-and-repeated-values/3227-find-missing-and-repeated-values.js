/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let result = []
    let flattened = grid.flat(Infinity)
    console.log(flattened)
    let map = {}

    for(let num of flattened){
         map[num]  = (map[num] || 0) +1
    }

    for(let key in map){
        if(map[key] == 2){
            result.push(+key)

        }
    }

    for(let i=1;i<=flattened.length;i++){
        if(!flattened.includes(i)) result.push(i)
    }

    return result
   
};