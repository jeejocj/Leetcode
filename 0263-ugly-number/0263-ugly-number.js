/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false; // Negative numbers and 0 are not ugly

    // Divide n by 2, 3, and 5 as much as possible
    for (const factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n /= factor;
        }
    }

    // If n reduces to 1, it's an ugly number
    return n === 1;
    
};