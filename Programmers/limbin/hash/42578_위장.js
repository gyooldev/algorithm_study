/**처음에는 원본 갯수 + 순열 돌려서 할려고 했는데 ... 너무 복잡해보여서 포기  */
// function solution(clothes) {
//     let answer = [];
//     let count = 0;
//     for (let i = 0; i < clothes.length; i++) {
//         answer.push(clothes[i][1])
//     }
//     const k = answer.sort();
//     let arrSet = new Set(k);
//     console.log(k, k.length)
//     console.log(arrSet, arrSet.size)
//     for (let j = 2; j < arrSet.size + 1; j++) {
//     }
// }

function solution(clothes) {
    let map = {};
    let answer = 1;
    for (let i = 0; i < clothes.length; i++) {
        map[clothes[i][1]] = map[clothes[i][1]] ? map[clothes[i][1]] + 1 : 2;
    }
    for (let key in map) {
        answer *= map[key];
    }

    return answer - 1;
}