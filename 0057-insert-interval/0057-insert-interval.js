/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];

    for (let i = 0; i < intervals.length; i++) {
        // Case 1: new interval goes BEFORE current interval (no overlap)
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            return res.concat(intervals.slice(i)); 
        }

        // Case 2: new interval goes AFTER current interval (no overlap)
        else if (newInterval[0] > intervals[i][1]) {
            res.push(intervals[i]);
        }

        // Case 3: intervals OVERLAP → we MERGE
        else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
        }
    }

    // Push the final merged interval
    res.push(newInterval);
    return res;
};
