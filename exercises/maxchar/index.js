// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counter = {};
  for (let char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  return Object.keys(counter).reduce((max, val) =>
    counter[max] > counter[val] ? max : val
  );
}

maxChar("fuckerrrrr");

module.exports = maxChar;
