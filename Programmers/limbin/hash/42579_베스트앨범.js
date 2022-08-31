function solution(genres, plays) {
    var answer = [];
    const sum = new Map();
    const idx = new Map();
    let arr = [];
    for (let i = 0; i < genres.length; i++) {
        if (sum.has(genres[i])) {
            sum.set(genres[i], sum.get(genres[i]) + plays[i])
        } else {
            sum.set(genres[i], plays[i])
        }

    }
    genres.forEach((val, index) => {

        if (idx.has(val)) {
            idx.get(val).push([index, plays[index]])
        } else {
            idx.set(val, [[index, plays[index]]])
        }
    })
    const maxSum = new Map([...sum.entries()].sort((a, b) => b[1] - a[1]))
    const maxIdx = new Map([...idx.entries()].sort((a, b) => {
        a[1].sort((a, b) => b[0] + b[1] - (a[0] + a[1]))
        b[1].sort((a, b) => b[0] + b[1] - (a[0] + a[1]))
    }))

    for (let key of maxSum) {
        if (maxIdx.get(key[0]).length === 1) {
            answer.push(maxIdx.get(key[0])[0][0])
            return answer
        }
        for (let a = 0; a < 2; a++) {
            answer.push(maxIdx.get(key[0])[a][0])
        }
    }
    return answer
}
