function solution(clothes) {
  var answer = 1;

  let tempAnswer = 1;

  let clothesCategoryMap = new Map();

  for (cloth of clothes) {
    clothesCategoryMap.set(
      cloth[1],
      (clothesCategoryMap.get(cloth[1]) || 0) + 1
    );
  }

  for (key of clothesCategoryMap.keys()) {
    let categoryNum = clothesCategoryMap.get(key);

    tempAnswer = tempAnswer * (categoryNum + 1);
  }
  answer = tempAnswer - 1;

  return answer;
}
