function solution(arr) {
  const answer = [arr[0]];
  let current = arr[0];
  for (num of arr) {
    if (current !== num) {
      answer.push(num);
      current = num;
    } else continue;
  }
  return answer;
}

//Array.filter()
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
