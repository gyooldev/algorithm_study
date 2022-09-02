/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const sort = strs.map(x => x.split('').sort().join(''));
    let map = new Map()
    let answer = [];
    for (let i = 0; i < sort.length; i++) {
        if (map.has(sort[i])) {
            map.get(sort[i]).push(strs[i])
        } else {
            map.set(sort[i], strs[i].split(','))
        }
    }
    for (let key of map) {
        answer.push(key[1])
    }
    return answer
};