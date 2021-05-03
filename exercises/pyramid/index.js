// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0) {
  if (row === n) return;
  return printRow(row, n * 2 - 1) + pyramid(n, row + 1);
}

const printRow = (row, length) => {
  let level = '';
  for (let i = 0; i < length; i++) {
    if (
      i >= Math.floor(length / 2) - row &&
      i <= Math.floor(length / 2) + row
    ) {
      level += '#';
    } else {
      level += ' ';
    }
  }
  console.log(level);
};

module.exports = pyramid;
