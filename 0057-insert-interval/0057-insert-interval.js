/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];

    for (let i = 0; i < intervals.length; i++) {
        let curr = intervals[i];

        // 1️. Current interval comes BEFORE new interval
        if (curr[1] < newInterval[0]) {
            res.push(curr);
        }
        // 2️. Current interval comes AFTER new interval
        else if (curr[0] > newInterval[1]) {
            res.push(newInterval);
            newInterval = curr;  
        }
        // 3️. Overlap → merge
        else {
            newInterval[0] = Math.min(newInterval[0], curr[0]);
            newInterval[1] = Math.max(newInterval[1], curr[1]);
        }
    }

    // Push the final interval
    res.push(newInterval);

    return res;
};
