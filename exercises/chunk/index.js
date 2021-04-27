// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const output = [];
  for (let el of array) {
    // if the output is empty OR if the length of last element in the output array is equal to size, create a new chunk
    if (!output.length || output[output.length - 1].length === size) {
      output.push([el]);
      // else, push the current element into the last chunk of the output
    } else {
      output[output.length - 1].push(el);
    }
  }
  return output;
}

module.exports = chunk;
