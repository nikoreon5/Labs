/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const count = {};
    // считаем сколько раз каждое число входит в nums1
    for (let num of nums1) {
        count[num] = (count[num] || 0) + 1;
    }
    // ищем пересечение с nums2
    const result = [];
    for (let num of nums2) {
        if (count[num] > 0) {
            result.push(num);
            count[num]--;
        }
    }
    return result;
};