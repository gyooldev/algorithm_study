//풀이 방법 맘에 안듬

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let lengthArray = [1];

  let countedCharArray = [];

  for (let i = 0; i < s.length; i++) {
    if (countedCharArray.includes(s[i])) {
      lengthArray.push(countedCharArray.length);
      const spliceIndex = countedCharArray.findIndex((elem) => elem === s[i]);
      countedCharArray.splice(0, spliceIndex + 1);
    }

    countedCharArray.push(s[i]);

    if (i === s.length - 1) {
      lengthArray.push(countedCharArray.length);
    }
  }

  const answer = lengthArray.sort((a, b) => b - a)[0];

  return answer;
};

// 더 깔끔한 풀이 w/ sliding window
function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
}
