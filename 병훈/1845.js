function solution(nums) {
    var answer = 0;
    
    const numsSet = new Set(nums);
    
    answer = Math.min(numsSet.size, nums.length / 2);
    
    return answer;
}
