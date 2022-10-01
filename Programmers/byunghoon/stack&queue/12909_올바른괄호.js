function solution(progresses, speeds) {
  var answer = [];
  let finishedDateArray = [];

  for (let i = 0; i < speeds.length; i += 1) {
    let tempProgress = speeds[i] + progresses[i];
    let tempDate = 1;
    while (tempProgress < 100) {
      tempProgress += speeds[i];
      tempDate += 1;
    }
    finishedDateArray.push(tempDate);
  }

  let q = finishedDateArray[0];
  let deployNumArray = [];
  let deployNum = 1;

  for (let i = 1; i < finishedDateArray.length; i += 1) {
    if (q < finishedDateArray[i]) {
      deployNumArray.push(deployNum);
      deployNum = 1;
      q = finishedDateArray[i];
    } else deployNum += 1;

    if (i === finishedDateArray.length - 1) {
      deployNumArray.push(deployNum);
    }
  }

  answer = deployNumArray;
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
