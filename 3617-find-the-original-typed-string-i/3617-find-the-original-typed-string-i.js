/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
 let extras = 0;
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) extras++;
    }
    return extras + 1;
    
};