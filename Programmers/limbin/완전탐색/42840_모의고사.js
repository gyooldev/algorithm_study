function solution(answers) {
    let answer = [];
    let arra = [1, 2, 3, 4, 5];
    let arrb = [2, 1, 2, 3, 2, 4, 2, 5];
    let arrc = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == arra[i % 5]) a++;
        if (answers[i] == arrb[i % 8]) b++;
        if (answers[i] == arrc[i % 10]) c++;
    }
    let arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    for (let j = 0; j < arr.length; j++) {
        if (Math.max(...arr) === arr[j]) {
            answer.push(j + 1)
        }
    }
    return answer

}