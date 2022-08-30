function solution(nums) {
    let length = nums.length / 2;
    let numsSet = new Set(nums);
    if (length >= numsSet.size) return numsSet.size;
    return length;
}