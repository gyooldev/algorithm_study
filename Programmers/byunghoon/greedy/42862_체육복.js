function solution(n, lost, reserve) {
  let answer = 0;
  const clothesNumMap = new Map();
  for (let i = 0; i < lost.length; i += 1) {
    clothesNumMap.set(lost[i], 0);
  }
  for (let i = 0; i < reserve.length; i += 1) {
    clothesNumMap.set(reserve[i], clothesNumMap.has(reserve[i]) ? 1 : 2);
  }
  const sortedClothesNumMap = new Map([...clothesNumMap].sort((a, b) => a[0] - b[0]));

  for (let i = 0; i < n; i += 1) {
    if (sortedClothesNumMap.get(i + 1) === 0) {
      if (sortedClothesNumMap.get(i) === 2) {
        answer += 1;
        continue;
      }
      if (sortedClothesNumMap.get(i + 2) === 2) {
        sortedClothesNumMap.set(i + 2, 1);
        answer += 1;
      }
    } else answer += 1;
  }
  return answer;
}
