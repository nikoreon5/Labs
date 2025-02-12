/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 0;
    let right = x;
    let left = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        if (square === x) {
            return mid;
        } else if (square < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};