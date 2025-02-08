/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1], [1, 1]];
    if (numRows === 1) return [res[0]];
    else if (numRows === 2) return res;
    for (let rowLength = 3; rowLength <= numRows; rowLength++) {
        const row = [1];
        for (let j = 0; j < rowLength - 2; j ++) {
            row.push(res[rowLength - 2][j] + res[rowLength - 2][j + 1]);
        }
        row.push(1);
        res.push(row);
    }

    return res;
};