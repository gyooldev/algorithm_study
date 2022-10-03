function solution(priorities, location) {
  let answer = 0;

  let prioritiesMax = Math.max(...priorities);

  while (priorities.length > 0) {
    if (priorities[0] < prioritiesMax) {
      priorities.push(priorities[0]);
      priorities.shift();
      if (location === 0) {
        location = priorities.length - 1;
      } else location -= 1;
    } else if (location === 0) {
      return answer + 1;
    } else {
      priorities.shift();
      prioritiesMax = Math.max(...priorities);
      answer += 1;
      location -= 1;
    }
  }
}

//map 구현과 Array.some()
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
