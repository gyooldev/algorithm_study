//Unsolved

function solution(participant, completion) {
  var answer;

  const personMap = new Map();

  for (let person of participant) {
    if (personMap.has(person)) {
      personMap.set(person, personMap.get(person) + 1);
    } else personMap.set(person, 1);
    console.log(personMap);
  }

  for (let person of completion) {
    personMap.set(person, personMap.get(person) - 1);
  }

  for (let [key, value] of personMap.entries()) {
    if (value === 1) return (answer = key);
  }

  return answer;
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
