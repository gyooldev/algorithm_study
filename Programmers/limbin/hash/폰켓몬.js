function solution(nums) {
    let length = nums.length / 2;
    let set = new Set(nums);
    console.log(`set: `, set.size)
    if (length >= set.size) return set.size;
    if (length < set.size) return length;
}