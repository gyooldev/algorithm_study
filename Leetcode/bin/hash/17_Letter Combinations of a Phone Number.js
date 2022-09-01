/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = new Map();
    let str = "abcdefghijklmnopqrstuvwxyz";
    let idx = 0;
    let arr = [];
    for (let i = 2; i < 10; i++) {
        if (i === 7 || i === 9) {
            map.set(i, str[idx++] + str[idx++] + str[idx++] + str[idx++])
        } else {
            map.set(i, str[idx++] + str[idx++] + str[idx++])
        }
    }
    function dfs(idx, str) {
        if (idx === digits.length) {
            arr.push(str)
            return arr;
        }

        for (let j = 0; j < map.get(Number(digits[idx])).length; j++) {
            let tmpstr = str + map.get(Number(digits[idx]))[j];
            dfs(idx + 1, tmpstr)
        }
    }
    dfs(0, "");
    if (arr.length === 1) return []
    return arr;

};


// dfs(0,"")
// dfs(1,"a")
// dfs(2,"ad")
// dfs(3,"adg") arr = adg , return 
// dfs(3,"adh") arr = adg, adh return
// dfs(3,"adi") arr = return
// dfs(2,"ae")
// dfs