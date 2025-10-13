/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let result  = [words[0]]

    for(let i=1;i<words.length;i++){
        let curr = words[i].split("").sort().join("")
        let prev = words[i-1].split("").sort().join("")

        if(curr != prev){
            result.push(words[i])
        }
    }

    return result
};