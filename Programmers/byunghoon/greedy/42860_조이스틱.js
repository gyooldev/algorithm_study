function solution(name) {
  let answer = name.length - 1;

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);

  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const alphabeticalDistance = (char) => {
    return Math.min(
      alphabet.findIndex((elem) => elem === char),
      26 - alphabet.findIndex((elem) => elem === char),
    );
  };

  for (let i = 0; i < name.length; i += 1) {
    let next = i + 1;
    while (next < name.length && name[next] === 'A') next += 1;
    answer = Math.min(answer, name.length - next + i * 2);
    answer = Math.min(answer, (name.length - next) * 2 + i);
  }

  for (let i = 0; i < name.length; i += 1) {
    answer += alphabeticalDistance(name[i]);
  }

  return answer;
}
