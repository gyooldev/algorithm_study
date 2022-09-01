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

    idx.forEach((value, key) => {
        value.sort((a, b) => {
            if (b[1] === a[1]) return a[0] - b[0] // play수 가 같다면 index를 기준으로 
            return b[1] - a[1]               // sort해준다는 의미!
        })
    })

    const maxIdx = new Map([...idx.entries()])
    for (let key of maxSum) {
        for (let a = 0; a < 2; a++) {
            if (maxIdx.get(key[0])[a]) {
                answer.push(maxIdx.get(key[0])[a][0])
            };
        }
    }
    return answer
}