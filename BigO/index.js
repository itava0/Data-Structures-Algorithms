const nemo = ['nemo'];
function findNemo(arr) {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  let t1 = performance.now();
  console.log(`call to find Nemo took ${(t1 - t0)} ms`)
}

findNemo(nemo);// O(n) --> Linear Time


const boxes = [0, 1, 2, 3, 4, 5]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);