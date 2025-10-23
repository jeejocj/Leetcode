/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {

    while (s.length > 2) {
        let sum = ''
        for (let i = 0; i < s.length - 1; i++) {
            sum += (+s[i] + +s[i + 1]) % 10
        }
        s = sum

    }
    return s[0] === s[1]

};