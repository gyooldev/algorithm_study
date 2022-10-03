function solution(s) {
  var answer = true;
  let parenthesesStack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (parenthesesStack[parenthesesStack.length - 1] === '(' && s[i] === ')') {
      parenthesesStack.pop();
    } else parenthesesStack.push(s[i]);
  }
  answer = !parenthesesStack.length;
  return answer;
}

//Programmers 효율성 통과 못하는 문제 있어서 실제로는 s.split('')해서 array 다루는 방식으로 제출
