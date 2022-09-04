var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    const arr = s.split('');
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            i = map.get(arr[i])
            map.clear()
        } else {
            map.set(arr[i], i)
        }
        if (max < map.size) {
            max = map.size;
        }
    }
    return max;
};