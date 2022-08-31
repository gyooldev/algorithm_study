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
