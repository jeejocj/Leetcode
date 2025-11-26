/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // STEP 1: Sort intervals by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    // STEP 2: Merge
    for (let i = 1; i < intervals.length; i++) {
        let last = result[result.length - 1];
        let curr = intervals[i];

        // Overlap check
        if (curr[0] <= last[1]) {
            // merge by updating the END
            last[1] = Math.max(last[1], curr[1]);
        } else {
            // no overlap → push new interval
            result.push(curr);
        }
    }

    return result;
};
