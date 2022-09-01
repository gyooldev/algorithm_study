/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var answer = [];
  const digitMap = new Map();
  digitMap.set("2", ["a", "b", "c"]);
  digitMap.set("3", ["d", "e", "f"]);
  digitMap.set("4", ["g", "h", "i"]);
  digitMap.set("5", ["j", "k", "l"]);
  digitMap.set("6", ["m", "n", "o"]);
  digitMap.set("7", ["p", "q", "r", "s"]);
  digitMap.set("8", ["t", "u", "v"]);
  digitMap.set("9", ["w", "x", "y", "z"]);

  const arrayMultiply = (arr1, arr2) => {
    let resultArray = [];
    if (arr1.length === 0) {
      for (let j = 0; j < arr2.length; j++) {
        resultArray.push(arr2[j]);
      }
    } else {
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          resultArray.push(arr1[i] + arr2[j]);
        }
      }
    }
    return resultArray;
  };

  let result = [];

  for (let i = 0; i < digits.length; i++) {
    const splitDigits = digits.slice(i, i + 1);
    result = arrayMultiply(result, digitMap.get(splitDigits));
    answer = result;
  }
  return answer;
};
