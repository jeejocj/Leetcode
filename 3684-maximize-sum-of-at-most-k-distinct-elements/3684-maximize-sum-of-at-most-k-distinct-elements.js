/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    nums.sort((a,b)=>b-a)
    let num = [...new Set(nums)]
    return num.slice(0,k)
};