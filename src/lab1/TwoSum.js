/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const numToFind = target - nums[i];
        if (map.has(numToFind) && map.get(numToFind) !== i) {
            return [i, map.get(numToFind)];
        }
    }

    return [];
};