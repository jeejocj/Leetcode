/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let map = {}
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1
    }
    let result = 0
    for (let key in map) {
        if (map[key] % k == 0) {
            result += key * map[key]
        }
    }
    return result
};