/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagramsMap = new Map();

  for (string of strs) {
    let sortedString = [...string].sort((a, b) => a.localeCompare(b)).join("");
    if (anagramsMap.has(sortedString)) {
      anagramsMap.get(sortedString).push(string);
    } else anagramsMap.set(sortedString, [string]);
  }

  let answerArray = [];
  for (let key of anagramsMap.keys()) {
    answerArray.push(anagramsMap.get(key));
  }

  return answerArray;
};
