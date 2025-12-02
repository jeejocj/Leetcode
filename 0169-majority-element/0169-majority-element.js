/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {}

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1

    }

    let largest = 0
    let num = null
    for (let key in map) {
        if (map[key] > largest) {
            largest = map[key]
            num = +key
        }
    }
    return num

};