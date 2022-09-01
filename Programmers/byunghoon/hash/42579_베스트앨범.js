function solution(genres, plays) {
  var answer = [];

  const playsMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    playsMap.set(genres[i], (playsMap.get(genres[i]) || 0) + plays[i]);
  }

  const playsMapToArray = [...playsMap];

  const sortedGenresArray = playsMapToArray
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);

  for (let i = 0; i < sortedGenresArray.length; i++) {
    const tempArray = [];
    genres.map(
      (val, idx) => val === sortedGenresArray[i] && tempArray.push(idx)
    );
    answer = answer.concat(
      tempArray.sort((a, b) => plays[b] - plays[a]).slice(0, 2)
    );
  }

  return answer;
}
