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

findNemo(nemo);