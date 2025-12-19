/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    function process(str){
        let stack = []
        for(let char of str){
            if(char !== '#'){
                stack.push(char)
            }else{
                stack.pop()
            }
        }
        return stack.join("")
    }

return process(s) === process(t)
};