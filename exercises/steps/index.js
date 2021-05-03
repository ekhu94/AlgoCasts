// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0) {
  if (row === n) return;
  return console.log(printRow(row, n)) + steps(n, row + 1);
}

const printRow = (step, total) => {
  let row = '';
  for (let i = 0; i < total; i++) {
    i <= step ? (row += '#') : (row += ' ');
  }
  return row;
};

steps(4);

module.exports = steps;
