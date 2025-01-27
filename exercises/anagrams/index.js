// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (cleanStr(stringA).length !== cleanStr(stringB).length) return false;
  const counter = {};
  for (let char of cleanStr(stringA)) {
    counter[char] = counter[char] + 1 || 1;
  }
  for (let char of cleanStr(stringB)) {
    if (!counter[char]) return false;
    counter[char]--;
  }
  return true;
}

const cleanStr = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase();
};

module.exports = anagrams;
