//Log All pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOFArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(i, j)
    }
  }
}

logAllPairsOFArray(boxes) // O(n^2) quadruple