//Give 2 arrays, create a function that let's a user know (true/ false) whether these arrays contain any common items
//For Example: 
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-------------------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

//First solution
// function commonItem(array1, array2 ) {
//   for(let i = 0; i < array1.length; i++) {
//     for(let j = 0; j < array2.length; j++) {
//       if(array1[i] === array2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(commonItem(array1, array2))

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

function commonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for(let i=0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for(let j=0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(commonItem2(array1, array2));