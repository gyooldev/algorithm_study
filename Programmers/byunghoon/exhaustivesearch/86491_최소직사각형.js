function solution(sizes) {
  var answer = 0;

  let regularSizes = [];

  for (let i = 0; i < sizes.length; i++) {
    regularSizes.push([
      Math.max(sizes[i][0], sizes[i][1]),
      Math.min(sizes[i][0], sizes[i][1]),
    ]);
  }

  let maxW = regularSizes[0][0];

  let maxH = regularSizes[0][1];

  for (let [w, h] of regularSizes) {
    maxW = Math.max(maxW, w);
    maxH = Math.max(maxH, h);
  }

  answer = maxW * maxH;

  return answer;
}
