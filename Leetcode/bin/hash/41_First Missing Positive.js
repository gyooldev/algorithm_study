/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    let count = 1;
    let a = new Set();
    for (let i = 0; i < nums.length; i++) {
        a.add(nums[i]);
    }
    for (let i = 0; i < nums.length + 1; i++) {
        if (!a.has(count++)) return count - 1;
    }
};