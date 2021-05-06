// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  const fibArr = [0, 1, 1];
  while (fibArr.length <= n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr[fibArr.length - 1];
}

module.exports = fib;
