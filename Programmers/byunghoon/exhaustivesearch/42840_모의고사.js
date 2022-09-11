function solution(answers) {
  var answer = [];
  let answers1 = [];
  let answers2 = [];
  let answers3 = [];
  let correctAnswersArray = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  for (let i = 0; i < Math.ceil(answers.length / 5); i++) {
    answers1.push(1, 2, 3, 4, 5);
  }
  for (let i = 0; i < Math.ceil(answers.length / 8); i++) {
    answers2.push(2, 1, 2, 3, 2, 4, 2, 5);
  }
  for (let i = 0; i < Math.ceil(answers.length / 10); i++) {
    answers3.push(3, 3, 1, 1, 2, 2, 4, 4, 5, 5);
  }
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answers1[i]) {
      correctAnswersArray[0][1] += 1;
    }
    if (answers[i] === answers2[i]) {
      correctAnswersArray[1][1] += 1;
    }
    if (answers[i] === answers3[i]) {
      correctAnswersArray[2][1] += 1;
    }
  }
  const sortedArray = correctAnswersArray.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i][1] === sortedArray[0][1]) {
      answer.push(sortedArray[i][0]);
    }
  }
  return answer;
}

//Cleaner solution
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
