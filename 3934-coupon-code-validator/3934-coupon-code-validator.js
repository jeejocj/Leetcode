/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const order = {electronics:0,grocery:1,pharmacy:2,restaurant:3}
    const regex = /^[a-zA-Z0-9_]+$/
    return code
        .map((c,i)=>[c,businessLine[i],isActive[i]])
        .filter(([c,b,a])=>a && order[b] !== undefined && regex.test(c))
            .sort((A, B) => {
      // sort by business order first
      const diff = order[A[1]] - order[B[1]];
      if (diff !== 0) return diff;
      // then by code in deterministic ASCII/Unicode order
      if (A[0] < B[0]) return -1;
      if (A[0] > B[0]) return 1;
      return 0;
    })
        .map(([c])=> c)
    
};