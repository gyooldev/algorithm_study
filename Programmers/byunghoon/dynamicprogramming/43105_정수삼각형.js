function solution(triangle) {
  let answer = 0;

  function addingRows(r1, r2) {
    for (let i = 0; i < r1.length; i++) {
      r1[i] += Math.max(r2[i], r2[i + 1]);
    }
    return r1;
  }
  for (let i = triangle.length - 1; i > 0; i--) {
    triangle[i - 1] = addingRows(triangle[i - 1], triangle[i]);
  }
  answer = Number(triangle[0]);
  return answer;
}
