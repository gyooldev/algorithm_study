//Unsolved
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [];
  let max = 0;
  let lengthCount = 0;

  //'(...)'가 아닌 경우 stack에 index 저장
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' && s[stack[stack.length - 1]] === '(') {
      stack.pop();
    } else stack.push(i);
  }

  //stack에 저장되어 있는 것은 invalid한 parentheses의 위치이므로 이를 제외하고 length 계산
  for (let i = 0; i < s.length; i++) {
    if (stack[0] === i) {
      stack.shift();
      max = Math.max(max, lengthCount);
      lengthCount = 0;
    } else lengthCount += 1;
    if (i === s.length - 1) {
      max = Math.max(max, lengthCount);
    }
  }

  return max;
};
